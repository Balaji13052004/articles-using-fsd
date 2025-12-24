BeyondChats – Interview Assignment Submission

This repository contains my submission for the BeyondChats technical assignment, completed as part of the interview selection process.
The goal was to design and implement a clean, functional full-stack solution with proper structure, clarity, and maintainability.

📌 Overview

The project is divided into separate modules to keep concerns isolated and the codebase easy to understand:

#Backend – REST API implementation

#Frontend – User-facing application

#Node Service(if applicable) – Supporting service layer

All components are committed as source code (no submodules) to ensure easy review and execution.

📁 Project Structure
beyondchats-assignment/
│
├── beyondchats-backend/     # Laravel backend (API)
├── beyondchats-frontend/    # Frontend application
├── beyondchats-node/        # Node.js service (if required)
└── README.md

🛠️ Tech Stack
Backend

Laravel (PHP)

RESTful APIs

Database integration (via .env)

Frontend

Modern JavaScript framework (React / Vite)

Component-based architecture

API integration with backend

Node (Optional)

Node.js

Express

⚙️ Setup Instructions
Backend:-
cd beyondchats-backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve


Backend runs on:

http://127.0.0.1:8000

Frontend:-
cd beyondchats-frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173

✅ Key Highlights

Clean folder structure and readable code

API routes implemented using REST standards

Frontend and backend properly separated

Environment variables handled securely

No unnecessary build files or node_modules committed

Repository structured for easy reviewer access

📝 Notes for Reviewers

.env files are excluded intentionally

All relevant source code is committed

Project can be run locally with minimal setup

Code is written with clarity over over-optimization

👤 Candidate Information

Name: Balaji
Purpose: Technical assignment 

Thank you for reviewing my submission.
