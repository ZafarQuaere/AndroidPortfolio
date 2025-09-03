# Coding Standards and Best Practices

## Overview
This document outlines the coding standards and best practices for the AndroidPortfolio project. All contributors must adhere to these guidelines to maintain code quality, consistency, and readability throughout the codebase.

## 1. Follow Coding Standards

### Frontend (React/JavaScript)
- **Naming Conventions:**
  - Use camelCase for variables and functions: `getUserData()`, `isLoading`
  - Use PascalCase for components: `Header`, `PortfolioPage`, `ProjectCard`
  - Use kebab-case for file names: `project-card.jsx`, `hero-section.jsx`
  - Use UPPER_SNAKE_CASE for constants: `API_BASE_URL`, `MAX_RETRIES`

- **File Structure:**
  - Components in `src/components/` with descriptive names
  - Pages in `src/pages/`
  - Utilities in `src/lib/` or `src/utils/`
  - Hooks in `src/hooks/`

- **Import Order:**
  1. React imports
  2. Third-party libraries
  3. Internal components (absolute imports using `@/`)
  4. Relative imports
  5. Type imports (if using TypeScript)

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import './styles.css';
```

### Backend (Python/FastAPI)
- **Naming Conventions:**
  - Use snake_case for variables, functions, and file names: `get_user_data()`, `user_id`
  - Use PascalCase for classes and models: `StatusCheck`, `UserModel`
  - Use UPPER_SNAKE_CASE for constants: `DATABASE_URL`, `MAX_CONNECTIONS`

- **File Structure:**
  - Models in `models/` directory
  - Routes in `routes/` or organized by feature
  - Utilities in `utils/`
  - Database operations in `db/`

- **Import Order:**
  1. Standard library imports
  2. Third-party imports
  3. Local application imports

```python
import os
from datetime import datetime
from typing import List

from fastapi import FastAPI, APIRouter
from pydantic import BaseModel

from .models import StatusCheck
```

## 2. Code Formatting and Linting

### Frontend
- **ESLint:** Enforce code quality rules
- **Prettier:** Maintain consistent code formatting
- **Configuration:** Follow existing `.eslintrc` and `.prettierrc` files

### Backend
- **Black:** Code formatting with line length of 88 characters
- **isort:** Import sorting
- **Flake8:** Linting and style checking
- **mypy:** Type checking (when applicable)

### Commands
```bash
# Frontend
yarn lint
yarn format

# Backend
black .
isort .
flake8 .
mypy .
```

## 3. Understand Existing Architecture

### Frontend Architecture
- **Component Structure:** Atomic design principles
  - `components/ui/`: Reusable UI primitives (buttons, cards, etc.)
  - `components/portfolio/`: Business-specific components (Header, Hero, etc.)
  - `pages/`: Page-level components
- **State Management:** React hooks, Context API for global state
- **Styling:** TailwindCSS with component-based approach
- **Routing:** React Router for navigation

### Backend Architecture
- **API Structure:** RESTful endpoints under `/api` prefix
- **Database:** MongoDB with Motor (async driver)
- **Models:** Pydantic for request/response validation
- **Middleware:** CORS, authentication (when implemented)
- **Configuration:** Environment-based settings

## 4. Review the Existing Codebase

### Before Adding New Features
1. **Search for Similar Functionality:** Use IDE search to find existing implementations
2. **Check Component Library:** Review `components/ui/` for reusable components
3. **Review API Patterns:** Follow existing endpoint patterns in `backend/server.py`
4. **Database Patterns:** Follow existing model and collection patterns

### Code Reuse Guidelines
- Prefer composition over duplication
- Extract common logic into utility functions
- Create reusable components for repeated UI patterns
- Use existing API client patterns for new endpoints

## 5. Documentation Standards

### Code Comments
```jsx
/**
 * Renders a project card with image, title, and description
 * @param {Object} project - Project data object
 * @param {string} project.title - Project title
 * @param {string} project.description - Project description
 * @param {string} project.image - Project image URL
 */
const ProjectCard = ({ project }) => {
  // Component implementation
};
```

```python
def create_status_check(status_data: StatusCheckCreate) -> StatusCheck:
    """
    Create a new status check record in the database.
    
    Args:
        status_data: The status check data to create
        
    Returns:
        The created status check with generated ID and timestamp
        
    Raises:
        DatabaseError: If the database operation fails
    """
    # Function implementation
```

### README Updates
- Update API documentation when adding new endpoints
- Document new environment variables
- Update setup instructions for new dependencies
- Add usage examples for new features

## 6. Version Control Best Practices

### Commit Messages
Follow conventional commit format:
```
type(scope): description

feat(auth): add user authentication endpoints
fix(ui): resolve button styling issue in dark mode
docs(readme): update installation instructions
refactor(api): simplify status check endpoint logic
test(auth): add unit tests for login functionality
```

### Branch Naming
- `feature/feature-name`: New features
- `fix/bug-description`: Bug fixes
- `docs/documentation-update`: Documentation changes
- `refactor/component-name`: Code refactoring

### Pull Request Guidelines
- Provide clear description of changes
- Include screenshots for UI changes
- Reference related issues
- Ensure all tests pass
- Request appropriate reviewers

## 7. Testing Standards

### Frontend Testing
- **Unit Tests:** Test individual components and utilities
- **Integration Tests:** Test component interactions
- **E2E Tests:** Test critical user flows

```jsx
// Example test structure
describe('ProjectCard', () => {
  it('renders project information correctly', () => {
    // Test implementation
  });
  
  it('handles click events properly', () => {
    // Test implementation
  });
});
```

### Backend Testing
- **Unit Tests:** Test individual functions and classes
- **API Tests:** Test endpoint behavior
- **Database Tests:** Test data operations

```python
# Example test structure
class TestStatusAPI:
    def test_create_status_check(self):
        """Test creating a new status check."""
        # Test implementation
        
    def test_get_status_checks(self):
        """Test retrieving status checks."""
        # Test implementation
```

### Test Coverage Requirements
- Maintain minimum 80% test coverage
- All new features must include tests
- Critical paths require comprehensive testing

## 8. Code Review Process

### As a Reviewer
- Check for adherence to coding standards
- Verify functionality and logic
- Suggest improvements and optimizations
- Ensure proper testing
- Validate documentation updates

### As a Contributor
- Self-review code before submitting PR
- Respond promptly to feedback
- Make requested changes thoroughly
- Ask questions for unclear feedback
- Update PR description as needed

## 9. Performance and Security

### Frontend Performance
- Optimize bundle size and loading times
- Use lazy loading for large components
- Implement proper caching strategies
- Minimize re-renders with React optimization techniques

### Backend Performance
- Use async/await for I/O operations
- Implement proper database indexing
- Add caching where appropriate
- Monitor and optimize slow queries

### Security Considerations
- Validate all inputs
- Use environment variables for sensitive data
- Implement proper CORS policies
- Follow security best practices for authentication

## 10. Continuous Learning and Improvement

### Stay Updated
- Follow React and FastAPI best practices
- Monitor security advisories
- Participate in code review discussions
- Share knowledge with team members

### Refactoring Guidelines
- Refactor when adding new features to similar areas
- Improve code readability and maintainability
- Extract common patterns into reusable utilities
- Update tests when refactoring

## Implementation Checklist

Before submitting any code:

- [ ] Code follows naming conventions
- [ ] Imports are properly organized
- [ ] Code is properly formatted (Prettier/Black)
- [ ] Linting passes without errors
- [ ] Relevant comments and documentation added
- [ ] Tests written and passing
- [ ] No duplicate functionality introduced
- [ ] Performance implications considered
- [ ] Security best practices followed
- [ ] Commit message follows conventional format

## Enforcement

These standards are enforced through:
- Automated linting and formatting tools
- Pre-commit hooks (when configured)
- Code review process
- CI/CD pipeline checks

All contributors are expected to follow these guidelines to maintain the quality and consistency of the AndroidPortfolio codebase.
