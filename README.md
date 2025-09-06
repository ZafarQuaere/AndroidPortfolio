# AndroidPortfolio – React Portfolio Application

A modern, responsive portfolio web application built with React. The application showcases a personal portfolio with sections for hero, about, skills, experience, projects, and contact information. Built with modern React practices and a beautiful UI component library.

## Table of Contents
- Overview
- Tech Stack
- Project Structure
- Prerequisites
- Quick Start
- Frontend Setup (React + CRACO + Tailwind)
- Development
- Deployment Guide
- Contributing & Coding Standards
- Troubleshooting

## Overview
This is a single-page React application that renders a beautiful, responsive portfolio website. The application features:
- Modern React 19 with functional components and hooks
- Responsive design with TailwindCSS
- Reusable UI component library based on Radix UI
- Smooth animations and interactions
- Mobile-first responsive design
- Fast development with hot reload

## Tech Stack
- **Frontend Framework**
  - React 19 with functional components and hooks
  - React Router 7 for navigation
- **Styling & UI**
  - TailwindCSS 3 for utility-first styling
  - Radix UI primitives for accessible components
  - Lucide React for beautiful icons
- **Build & Development**
  - CRACO (Create React App customization)
  - Hot reload for fast development
- **Utilities & Libraries**
  - React Hook Form for form handling
  - Zod for validation
  - Sonner for toast notifications
  - Embla Carousel for interactive carousels
- **Code Quality**
  - ESLint for code linting
  - Prettier for code formatting
  - PostCSS for CSS processing

## Project Structure
```
AndroidPortfolio/
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
- Node.js 16+ 
- Yarn package manager

## Quick Start
Get your portfolio running in just a few commands:

```bash
# Clone the repository
git clone <repository-url>
cd AndroidPortfolio

# Install dependencies
cd frontend
yarn install

# Start the development server
yarn start
```

🎉 **That's it!** Your portfolio will be running at `http://localhost:3000`

## Development

### Available Scripts
In the frontend directory, you can run:

- **`yarn start`** - Runs the app in development mode at `http://localhost:3000`
- **`yarn build`** - Builds the app for production to the `build` folder
- **`yarn test`** - Launches the test runner in interactive watch mode
- **`yarn lint`** - Runs ESLint to check code quality
- **`yarn lint:fix`** - Automatically fixes ESLint issues
- **`yarn format`** - Formats code using Prettier

### Development Features
- **Hot Reload** - Changes are reflected immediately
- **ESLint Integration** - Code quality checks
- **Prettier Formatting** - Consistent code style
- **Tailwind CSS** - Utility-first styling
- **Component Library** - Reusable UI components

## Detailed Setup Guide

For a complete step-by-step setup guide, see [LOCAL_SETUP_GUIDE.md](./LOCAL_SETUP_GUIDE.md).

## Portfolio Sections

The application includes the following main sections:

- **Header** - Navigation bar with smooth scrolling links
- **Hero** - Introduction and call-to-action section
- **About** - Personal information and background
- **Skills** - Technical skills and expertise
- **Experience** - Professional work history
- **Projects** - Showcase of development projects
- **Contact** - Contact information and form
- **Footer** - Additional links and information

### Customizing Content

Portfolio content is managed through mock data files in `src/data/mock.js`. You can easily customize:

- Personal information
- Skills and technologies
- Work experience
- Project details
- Contact information

### Component Structure

The application uses a modular component structure:

```
src/components/
├── portfolio/          # Main portfolio sections
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
└── ui/                # Reusable UI components
    ├── button.jsx
    ├── card.jsx
    ├── badge.jsx
    └── ... (30+ components)
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
