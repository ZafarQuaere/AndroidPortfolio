# AndroidPortfolio – React + FastAPI + MongoDB

A full‑stack portfolio web application with a modern React frontend and a FastAPI backend backed by MongoDB. The frontend renders a personal portfolio (hero, about, skills, experience, projects, contact). The backend exposes simple status endpoints to demonstrate persistence, telemetry, or future integrations (e.g., contact form submissions).

## Table of Contents
- Overview
- Tech Stack
- Project Structure
- Prerequisites
- Quick Start
- Backend Setup (FastAPI + MongoDB)
- Frontend Setup (React + CRACO + Tailwind)
- Start Locally (Detailed)
- API Reference
- Frontend ↔ Backend Integration (optional)
- Deployment Guide
- Contributing & Coding Standards
- Troubleshooting

## Overview
This project is split into two parts:
- Frontend (React SPA): Renders a portfolio site composed of modular sections and a reusable UI component library.
- Backend (FastAPI): Provides REST endpoints under `/api` and persists data to MongoDB using Motor (async driver).

By default, the frontend does not make API calls. The backend is prepared for extensions like contact form submissions or visit/status logging.

## Tech Stack
- Frontend
  - React 19, React Router 7
  - TailwindCSS 3, Radix UI primitives, `lucide-react` icons
  - CRACO (Create React App customization)
  - Utilities: `react-hook-form`, `zod`, `sonner` toasts, `embla-carousel-react`
- Backend
  - FastAPI, Uvicorn
  - MongoDB (Motor async driver), Pydantic v2 models
  - CORS middleware, dotenv for env management
- Tooling
  - Frontend: ESLint, PostCSS, Tailwind
  - Backend: pytest, black, isort, flake8, mypy

## Project Structure
```
AndroidPortfolio/
  backend/
    server.py            # FastAPI app, /api router, Mongo client
    requirements.txt     # Python dependencies
    .env                 # (create locally) Mongo and CORS settings
  frontend/
    src/
      pages/PortfolioPage.jsx         # Composes portfolio sections
      components/portfolio/*           # Header, Hero, About, Skills, etc.
      components/ui/*                  # Radix-based UI components
      App.js                           # Router and Toaster
      index.js, index.css, App.css
    craco.config.js                    # Webpack alias and HMR controls
    package.json                       # Frontend dependencies and scripts
  README.md
```

## Prerequisites
- Node.js 18+ and Yarn 1.x
- Python 3.11+
- A running MongoDB instance (local or MongoDB Atlas)

## Quick Start
Run backend (FastAPI) and frontend (React) locally.

Backend
```bash
# From project root
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip setuptools wheel
pip install -r backend/requirements.txt

# (Optional) Start MongoDB via Docker if you don't have Mongo locally
# docker run -d --name mongo -p 27017:27017 mongo:7

# Create backend/.env
cat > backend/.env << 'EOF'
MONGO_URL=mongodb://localhost:27017
DB_NAME=android_portfolio
CORS_ORIGINS=http://localhost:3000
EOF

# Start API
python -m uvicorn backend.server:app --reload --port 8000
# Test: curl http://localhost:8000/api/
```

Frontend
```bash
# In a separate terminal
corepack enable && corepack prepare yarn@1.22.22 --activate
cd frontend
yarn
yarn start
# App: http://localhost:3000
```

## Backend Setup (FastAPI + MongoDB)
1) Create `backend/.env` with your settings:
```bash
MONGO_URL=mongodb://localhost:27017
DB_NAME=android_portfolio
CORS_ORIGINS=http://localhost:3000
```
2) Install dependencies:
```bash
pip install -r backend/requirements.txt
```
3) Run the API server:
```bash
python -m uvicorn backend.server:app --reload --port 8000
```
4) Verify it’s up:
```bash
curl http://localhost:8000/api/
```

## Frontend Setup (React + CRACO + Tailwind)
1) Install dependencies:
```bash
cd frontend
yarn
```
2) Start the dev server:
```bash
yarn start
```
3) Visit the app at `http://localhost:3000`.

Note: No proxy is configured in `craco.config.js`. Use full backend URLs (e.g., `http://localhost:8000/api/...`) or add an environment-based API base URL.

## Start Locally (Detailed)
1) Start MongoDB
- Use a local MongoDB or run Docker:
```bash
docker run -d --name mongo -p 27017:27017 mongo:7
```

2) Backend (FastAPI)
```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip setuptools wheel
pip install -r backend/requirements.txt

cat > backend/.env << 'EOF'
MONGO_URL=mongodb://localhost:27017
DB_NAME=android_portfolio
CORS_ORIGINS=http://localhost:3000
EOF

python -m uvicorn backend.server:app --reload --port 8000
```
Verify:
```bash
curl http://localhost:8000/api/
# { "message": "Hello World" }
```

3) Frontend (React)
```bash
corepack enable && corepack prepare yarn@1.22.22 --activate
cd frontend
yarn install
yarn start
```
Open:
- http://localhost:3000 (or set `PORT=3001 yarn start` if 3000 is busy)

Notes
- Ensure `CORS_ORIGINS` in backend/.env includes your frontend origin (e.g., http://localhost:3000 or http://localhost:3001).
- The SPA loads static portfolio content by default; backend calls are optional until integrated.

## API Reference
Base URL: `http://localhost:8000/api`

- GET `/` – Health
  - Response: `{ "message": "Hello World" }`

- POST `/status` – Create a status check record
  - Body: `{ "client_name": "string" }`
  - Response: `{ id, client_name, timestamp }`

- GET `/status` – List status checks (up to 1000)
  - Response: `[{ id, client_name, timestamp }, ...]`

Example usage:
```bash
curl http://localhost:8000/api/

curl -X POST http://localhost:8000/api/status \
  -H "Content-Type: application/json" \
  -d '{"client_name":"portfolio-frontend"}'

curl http://localhost:8000/api/status
```

## Frontend ↔ Backend Integration (optional)
There are no API calls in the frontend yet. To integrate:
1) Configure an API base URL (for CRA/CRACO): create `frontend/.env` with:
```bash
REACT_APP_API_BASE_URL=http://localhost:8000/api
```
2) Create a small client `src/lib/api.js`:
```js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const createStatus = (clientName) =>
  api.post('/status', { client_name: clientName }).then(r => r.data);

export const listStatuses = () =>
  api.get('/status').then(r => r.data);

export default api;
```
3) Call from a component (e.g., on mount in `Header` or `Hero`):
```js
import { useEffect } from 'react';
import { createStatus } from '@/lib/api';

export default function Header() {
  useEffect(() => {
    createStatus('portfolio-frontend').catch(() => {});
  }, []);
  return (/* ... */);
}
```

## Deployment Guide
Frontend
- Build: `cd frontend && yarn build` (outputs to `frontend/build`)
- Host on Netlify/Vercel/S3+CloudFront or any static host

Backend
- Deploy FastAPI with Uvicorn on Render/Fly.io/Heroku/AWS/GCP/Azure
- Set environment variables (`MONGO_URL`, `DB_NAME`, `CORS_ORIGINS`)
- Use MongoDB Atlas for managed Mongo

Configuration
- Ensure `CORS_ORIGINS` includes the deployed frontend origin
- Point the frontend to the deployed API URL via `REACT_APP_API_BASE_URL`

## Contributing & Coding Standards

This project follows strict coding standards and best practices to maintain code quality and consistency. All contributors must adhere to these guidelines.

### Quick Reference
- **Frontend:** React + TailwindCSS with camelCase variables, PascalCase components
- **Backend:** Python + FastAPI with snake_case conventions
- **Commits:** Use conventional commit format: `type(scope): description`
- **Testing:** Maintain 80%+ test coverage for new features
- **Documentation:** Update relevant docs with any changes

### Detailed Standards
For comprehensive coding standards, architecture guidelines, testing requirements, and best practices, see:
**[Coding Standards & Best Practices](.cursor/rules/coding-standards.md)**

### Development Workflow
1. Review existing codebase for similar functionality
2. Follow established patterns and conventions
3. Write tests for new features
4. Run linting and formatting tools:
   ```bash
   # Frontend
   cd frontend && yarn lint && yarn format
   
   # Backend (in venv)
   black . && isort . && flake8 .
   ```
5. Create meaningful commit messages
6. Submit PR with clear description and tests

### Code Quality Tools
- **Frontend:** ESLint, Prettier
- **Backend:** Black, isort, flake8, mypy
- **Testing:** Jest (frontend), pytest (backend)

## Troubleshooting
- Backend fails to start: ensure `backend/.env` exists and MongoDB is reachable
- CORS errors in browser: add the frontend origin to `CORS_ORIGINS`
- Frontend cannot reach API: verify ports and base URL, check network errors in DevTools
- Dependency issues: delete `frontend/node_modules`, reinstall (`yarn`), and retry
- Linting errors: run `yarn lint --fix` (frontend) or `black . && isort .` (backend)

## License
MIT (or your preferred license).
