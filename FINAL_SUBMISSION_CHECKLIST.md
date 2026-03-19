# Final Submission Checklist

Use this checklist to package one zip file that follows the competition rules.

## 1) Decide Team Naming
Team name used below: MediCuties.

Required naming:
- MediCuties_Submission.zip
- MediCuties_SourceCode
- MediCuties_Datasets

## 2) Prepare Source Code Folder
Inside MediCuties_SourceCode, include your current repo code:
- frontend
- backend
- README.md
- web-flow-diagram.md
- PROTOTYPE_FLOW.md
- APP_FEATURES_SUMMARY.md

Backend submission-ready files already prepared in backend:
- requirements.txt
- .env.example
- BACKEND_SUBMISSION_README.md

## 3) Prepare Dataset Folder
Inside MediCuties_Datasets, include:
- Annotated dataset files used for the prototype
- A dataset README explaining columns, labels, and annotation method

Minimum dataset documentation fields:
- Dataset name
- Source
- Collection period
- Column definitions
- Label definitions
- Annotation rules
- Missing value handling

## 4) Remove Sensitive and Heavy Files
Do not include:
- .env
- Any real API keys or tokens
- frontend/node_modules
- frontend/dist
- Python virtual environment folders
- Temp/cache files

## 5) Build Suggested Submission Tree
MediCuties_Submission/
- MediCuties_SourceCode/
  - frontend/
  - backend/
  - README.md
  - web-flow-diagram.md
  - PROTOTYPE_FLOW.md
  - APP_FEATURES_SUMMARY.md
- MediCuties_Datasets/
  - your_annotated_files_here
  - MediCuties_Dataset_README.md
- MediCuties_Documentation/ (optional)
  - slides_or_extra_docs

## 6) Verify Backend Package
In MediCuties_SourceCode/backend, confirm these exist:
- Reminisce_bot.py
- Database.ipynb
- requirements.txt
- .env.example
- BACKEND_SUBMISSION_README.md

## 7) Verify Frontend Package
In MediCuties_SourceCode/frontend, confirm these exist:
- package.json
- package-lock.json
- src/
- public/
- index.html
- vite.config.js

Do not include node_modules or dist.

## 8) Create Zip
Zip MediCuties_Submission folder into MediCuties_Submission.zip.

## 9) Final Checks Before Upload
- Zip size is less than 1 GB
- No credentials in any file
- Folder and file names follow team naming rule
- Source code and datasets are both included
- Annotation details are included with datasets

## 10) Optional but Recommended
- Keep a git branch named submission-final as your frozen snapshot.
- Tag commit for traceability.
