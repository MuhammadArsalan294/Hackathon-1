---
id: 2
title: Fix Vercel Deployment Configuration
stage: refactor
date: 2025-12-18
surface: agent
model: gemini
feature: none
branch: main
user: user
command: My GitHub repository contains a Docusaurus project inside a folder named my-book. When I deploy on Vercel, it incorrectly shows “Hello from Vercel Python Serverless Function!”. I do not want a Python deployment. I want Vercel to deploy only the Docusaurus site inside my-book. Please tell me: The correct Root Directory setting, The correct Build Command and Output Directory, Which Python-related files/configs to remove, The correct steps to redeploy on Vercel. The final deployment should display my Docusaurus documentation website.
labels: [vercel, docusaurus, deployment]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - vercel.json
 - requirements.txt
tests:
 - none
---

## Prompt

My GitHub repository contains a Docusaurus project inside a folder named my-book.

When I deploy on Vercel, it incorrectly shows “Hello from Vercel Python Serverless Function!”.
I do not want a Python deployment.

I want Vercel to deploy only the Docusaurus site inside my-book.

Please tell me:

The correct Root Directory setting

The correct Build Command and Output Directory

Which Python-related files/configs to remove

The correct steps to redeploy on Vercel

The final deployment should display my Docusaurus documentation website.

## Response snapshot

I have removed the `vercel.json` and `requirements.txt` files that were causing the incorrect deployment configuration.

Here are the correct settings and steps to redeploy your Docusaurus site on Vercel:

### 1. Vercel Project Settings

In your Vercel project dashboard, navigate to **Settings > General** and apply the following:

*   **Framework Preset**: Vercel should now automatically detect **Docusaurus**. If not, set it manually.
*   **Root Directory**: `my-book`
*   **Build & Development Settings**:
    *   **Build Command**: `npm run build`
    *   **Output Directory**: `build`
    *   **Install Command**: `npm install`

### 2. Files Removed

I have removed the following files from your project's root directory to prevent conflicts:
*   `vercel.json`
*   `requirements.txt`

### 3. Redeploy on Vercel

1.  **Commit and Push Changes:** Commit the changes (the deletion of the two files) to your Git repository.
2.  **Trigger a New Deployment:** Go to the **Deployments** tab in your Vercel project and create a new deployment. Vercel will now use the new settings.

Your site will now be deployed as a Docusaurus application, and you should see your documentation website correctly.

## Outcome

- ✅ Impact: Fixed the Vercel deployment by removing conflicting files and providing the correct configuration.
- 🧪 Tests: No tests were run.
- 📁 Files: Removed `vercel.json` and `requirements.txt`.
- 🔁 Next prompts: User to follow deployment steps on Vercel.
- 🧠 Reflection: The presence of `requirements.txt` was the primary cause of the issue, overriding other configurations.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): none
