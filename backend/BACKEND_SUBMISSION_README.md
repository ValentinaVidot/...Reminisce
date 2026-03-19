# Backend Submission README

## Purpose
This backend prototype powers a conversational dementia support flow.
It fetches patient context from Supabase, sends prompts to Gemini, and logs graded responses to Supabase.

Main script: Reminisce_bot.py
Optional analysis notebook: Database.ipynb

## Runtime Requirements
- Python 3.10 or newer
- Internet access for Supabase and Gemini APIs

## Python Dependencies
Install from requirements.txt in this folder:

pip install -r requirements.txt

## Environment Variables
Create a local .env file in this backend folder using .env.example as template.

Required keys:
- SUPABASE_URL
- SUPABASE_KEY
- GEMINI_API_KEY

Important:
- Do not submit real credentials.
- Submit .env.example only.

## Setup Steps
1. Open terminal in backend folder.
2. Create virtual environment (optional but recommended).
3. Install dependencies.
4. Create .env from .env.example and fill local keys.
5. Ensure the following Supabase tables exist:
   - patient_details
   - assessment_logs
6. Run the bot script.

## Run Command
python Reminisce_bot.py

## Input and Output
User input:
- Free text entered in terminal per turn.

Model output:
- JSON text with these fields:
  - bot_response: string
  - fact_graded: string or null
  - is_correct: boolean or null

Log write behavior:
- When fact_graded is not null and is_correct is not null,
  one row is inserted into assessment_logs with:
  - patient_id
  - fact_category
  - bot_question
  - user_answer
  - is_correct

## Notes for Evaluators
- This version is a CLI prototype backend.
- Frontend integration can call equivalent API endpoints if API layer is added.
- For submission, include this folder as part of MediCuties_SourceCode.
