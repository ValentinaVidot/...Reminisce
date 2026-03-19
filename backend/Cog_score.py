import os
from dotenv import load_dotenv
from supabase import create_client, Client
from datetime import datetime, timedelta

load_dotenv()
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

TEST_PATIENT_ID = "0f5daa09-6a1b-404a-83dd-02bdd12d7243" 
#Cognitive score calculation
def cog_score(patient_id):

    seven_days_ago = (datetime.now() - timedelta(days=7)).isoformat()
    response = supabase.table("assessment_logs") \
        .select("is_correct") \
        .eq("patient_id", patient_id) \
        .gte("created_at", seven_days_ago) \
        .execute()
        
    logs = response.data
    
    if not logs:
        return None 

    total_questions = len(logs)
    correct_answers = sum(1 for log in logs if log["is_correct"])
    
    score_percentage = (correct_answers / total_questions) * 100
    
    return round(score_percentage, 1)

score = cog_score(TEST_PATIENT_ID)
print(f"7-Day Rolling Cognitive Score: {score}%")