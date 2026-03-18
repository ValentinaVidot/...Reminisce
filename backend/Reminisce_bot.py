import json
from datetime import datetime
from supabase import create_client
from google import genai
from google.genai import types
from datetime import datetime
import os
from dotenv import load_dotenv

# Load the hidden keys from the .env file
load_dotenv()

# Grab them securely
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
gemini = genai.Client(api_key=GEMINI_API_KEY)

#Function to get context related to time/date
def context():
    now = datetime.now()
    month = now.month
    if month in [12, 1, 2]: season = "Winter"
    elif month in [3, 4, 5]: season = "Spring"
    elif month in [6, 7, 8]: season = "Summer"
    else: season = "Autumn"
    today_str = now.strftime("%A, %B %d, %Y")
    return today_str, season

#Function to retrieve patient specific details
def patient_data():
    res = supabase.table("patient_details").select("*").limit(1).execute()
    return res.data[0] if res.data else {}

#System prompt function
def system_prompt(patient_data, today_str, season):
    return f"""You are a warm, patient, and empathetic companion for an elderly user with dementia. Your job is to act as a companion to them and hold casual conversations.
                Here are facts about their life:
                {patient_data}                
                Casually use these facts to gently test their memory. If they get a fact wrong, validate their feelings and gently pivot. Never argue or bluntly correct them.

                CURRENT CONTEXT:
                - Today's Date: {today_str}
                - Current Season: {season}

                YOUR BEHAVIOR:
                1. OPENING RULE: Your very first message MUST end with a question about today's date, day of the week, or month. No exceptions.
                2. CONVERSATION RATIO: Aim for 70% casual chat and 30% memory testing. Don't turn every sentence into a quiz or asking questions.
                3. BREADCRUMBING: When testing a memory fact, NEVER include any specific details (names, places, numbers) in your question. You must ask open-endedly first and let the user fill in the blank.
                4. TONE: Use concise, short and simple sentences. Be curious and encouraging.
                5. DETAIL BAN: You are strictly forbidden from mentioning any specific name, place, or fact from the patient's profile unprompted. Only reflect a detail back AFTER the user has mentioned it themselves.
                
                OUTPUT FORMAT:
                You MUST respond in valid JSON format with exactly these three keys:
                - "bot_response": (String) Your conversational reply.
                - "fact_graded": (String or null) The exact dictionary key of the fact being evaluated in the user's latest message (e.g., "spouse_name"). Use null if no fact was tested.
                - "is_correct": (Boolean or null) true if they answered correctly, false if wrong, or null if no fact was tested.
                """

#Chat initialization
def start_chat(prompt):
    return gemini.chats.create(
        model="gemini-3.1-flash-lite-preview",
        config=types.GenerateContentConfig(
            system_instruction=prompt,
            response_mime_type="application/json"
        )
    )

#Main 
def main():
    today_str, season = context()
    p_data = patient_data()
    patient_id = p_data.get("id")
    
    prompt = system_prompt(p_data, today_str, season)
    chat = start_chat(prompt)

    def process_turn(raw_response, current_user_input="", last_bot_message=""):
        bot_data = json.loads(raw_response.text)
        print(f"\nBot: {bot_data['bot_response']}\n")
        
        if bot_data.get("fact_graded") and bot_data.get("is_correct") is not None:
            log_entry = {
                "patient_id": patient_id,
                "fact_category": bot_data["fact_graded"],
                "bot_question": last_bot_message,
                "user_answer": current_user_input,
                "is_correct": bot_data["is_correct"]
            }
            supabase.table("assessment_logs").insert(log_entry).execute()
            
        return bot_data["bot_response"]

    last_bot_msg = ""
    
    initial = chat.send_message("Start the conversation.")
    last_bot_msg = process_turn(initial) 

    while True:
        user_input = input("You: ").strip()
        if user_input.lower() in ["quit", "exit"]:
            print("Ending session.")
            break
        if not user_input:
            continue
            
        response = chat.send_message(user_input)
        last_bot_msg = process_turn(response, user_input, last_bot_msg)

if __name__ == "__main__":
    main()