# 🚀 Local Setup Guide - Android Portfolio Project

This guide provides step-by-step instructions to run the Android Portfolio project locally on your machine.

## 📋 Prerequisites Checklist

Before starting, ensure you have the following installed:

- [ ] **Node.js** (version 16 or higher)
  - Download from: https://nodejs.org/
  - Verify: `node --version`
- [ ] **Yarn** package manager
  - Install: `npm install -g yarn`
  - Verify: `yarn --version`
- [ ] **Git** (for cloning the repository)
  - Download from: https://git-scm.com/
  - Verify: `git --version`

## 🏗️ Project Structure

```
AndroidPortfolio/
├── frontend/         # React application
│   ├── src/
│   │   ├── components/
│   │   │   ├── portfolio/    # Portfolio sections
│   │   │   └── ui/          # Reusable UI components
│   │   ├── data/            # Mock data
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utility functions
│   │   └── pages/           # Page components
│   ├── public/              # Static assets
│   ├── package.json
│   └── node_modules/        # Dependencies (created during setup)
├── LOCAL_SETUP_GUIDE.md
└── README.md
```

## 🔧 Setup Instructions

### Step 1: Clone the Repository

```bash
# Clone the project
git clone <repository-url>
cd AndroidPortfolio
```

- [ ] Repository cloned successfully
- [ ] Navigated to project directory

### Step 2: Frontend Setup (React)

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install Node.js dependencies
yarn install
```

**Checklist:**
- [ ] Navigated to frontend directory
- [ ] All Node.js dependencies installed successfully
- [ ] No installation errors

### Step 3: Verify Installation

```bash
# Check if all dependencies are installed correctly
yarn --version
node --version
```

**Checklist:**
- [ ] Yarn and Node.js versions display correctly
- [ ] No installation errors

## 🚀 Running the Application

### Step 4: Start the Application

```bash
# From the frontend directory
cd frontend

# Start the React development server
yarn start
```

**Expected Output:**
```
yarn run v1.22.22
$ craco start
Starting the development server...

webpack compiled successfully
```

**Checklist:**
- [ ] Frontend server started successfully
- [ ] Server running on port 3000
- [ ] Browser automatically opens (or manual navigation works)
- [ ] No compilation errors

## 🌐 Accessing the Application

### Step 5: Verify the Application

**Portfolio Application:**
- URL: http://localhost:3000

**Checklist:**
- [ ] Frontend loads in browser
- [ ] Portfolio content displays properly
- [ ] All sections are visible (Header, Hero, About, Skills, Experience, Projects, Contact, Footer)
- [ ] Navigation works smoothly
- [ ] No console errors in browser
- [ ] Responsive design works on different screen sizes

## 🔍 Troubleshooting

### Common Issues and Solutions

#### Issue: ESLint Configuration Conflicts
**Symptoms:** Frontend fails to compile with ESLint errors
**Solution:**
```bash
cd frontend
yarn add eslint@^8.57.0 --dev
```

#### Issue: Port Already in Use
**Symptoms:** `EADDRINUSE` error on port 3000
**Solution:**
```bash
# Kill processes on port 3000
lsof -ti:3000 | xargs kill -9
```

#### Issue: Node Dependencies Installation Fails
**Solution:**
```bash
# Clear yarn cache and reinstall
yarn cache clean
rm -rf node_modules
yarn install
```

#### Issue: Browser Shows Only "Practice"
**Symptoms:** Chrome shows minimal content while other browsers work
**Solution:**
- Clear browser cache and cookies
- Try incognito/private mode
- Ensure JavaScript is enabled

### Verification Checklist

- [ ] Frontend server running on port 3000
- [ ] Portfolio loads completely in browser
- [ ] All portfolio sections visible
- [ ] Navigation works properly
- [ ] Responsive design works on different screen sizes
- [ ] No JavaScript errors in browser console

## 🛑 Stopping the Application

To stop the application:

1. **Frontend:** Press `Ctrl+C` in the terminal running the development server

## 📝 Development Notes

- **Hot Reload:** The development server supports hot reload for development
- **Linting:** Run `yarn lint` in frontend directory to check code quality
- **Building:** Run `yarn build` in frontend directory for production build
- **Testing:** Run `yarn test` in frontend directory for running tests

## 🎯 Quick Start Commands

For experienced developers, here's the quick start sequence:

```bash
# Clone and setup
git clone <repository-url>
cd AndroidPortfolio/frontend

# Install dependencies and start
yarn install && yarn start
```

## ✅ Success Criteria

Your setup is successful when:
- [ ] Frontend displays the complete portfolio at http://localhost:3000
- [ ] No errors in browser console
- [ ] All portfolio sections (Header, Hero, About, Skills, Experience, Projects, Contact, Footer) are visible
- [ ] Navigation between sections works smoothly
- [ ] Portfolio is responsive and works on different screen sizes

---

**🎉 Congratulations!** Your Android Portfolio project is now running locally as a simple, fast React application!

For any issues not covered in this guide, please check the project's README.md or create an issue in the repository.
