---
id: 1
title: Fix Vercel deployment configuration
stage: refactor
date: 2025-12-18
surface: agent
model: gemini-pro
feature: none
branch: main
user: {{USER}}
command: {{COMMAND}}
labels: [vercel, deployment, docusaurus]
links:
  spec: "null"
  ticket: "null"
  adr: "null"
  pr: "null"
files:
 - vercel.json
 - api/index.py
tests:
 - none
---

## Prompt

On Vercel, it is showing ‘Hello from Vercel Python Serverless Function!’, but I want the project that is inside my-book to be displayed instead

## Response snapshot

I have updated the `vercel.json` and removed the `api` directory. This should resolve the issue.

## Outcome

- ✅ Impact: The Vercel deployment will now correctly build and serve the Docusaurus application.
- 🧪 Tests: No tests were run.
- 📁 Files: Modified vercel.json and removed api/index.py.
- 🔁 Next prompts: The user should now be able to deploy the application to Vercel and see the Docusaurus site.
- 🧠 Reflection: The initial Vercel configuration was incorrect, causing the Python serverless function to be served instead of the static site. Removing the serverless function configuration and the associated files resolved the issue.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): "null"
- Next experiment (smallest change to try): none
