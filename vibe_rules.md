# 📌 Vibe Coding General Rules

## 1. **Check Before Creating Anything**
- Always **search the codebase first** before creating:
  - New files (classes, interfaces, layouts, resources, etc.).
  - New features or modules.
  - New dependencies or libraries.
- If the required implementation already exists:
  - **Reuse it.**
  - If needed, **update or extend** it instead of creating duplicates.

---

## 2. **Avoid Duplicates**
- **Do not create duplicate files or classes** in different folders/packages.
- If a duplicate already exists:
  - Keep only **one clean, unified implementation**.
  - Remove or merge the others.
- Maintain **single source of truth (SSOT)** for each feature, utility, or config.

---

## 3. **Update Instead of Recreate**
- If functionality exists but needs modifications:
  - **Enhance existing code** instead of starting fresh.
- Follow **incremental improvement**:  
  Extend → Refactor → Optimize → Only then Create (if truly missing).

---

## 4. **Dependencies & Libraries**
- Do not add a new dependency if the same functionality is already supported by:
  - An **existing dependency** in the project.
  - **Custom in-house utilities/helpers** already available.
- Always prefer **minimal dependencies** to reduce app size and complexity.

---

## 5. **Code Consistency**
- Follow the **existing project architecture** (MVVM, Clean Architecture, etc.).
- Adhere to:
  - **SOLID principles**.
  - **Error handling guidelines**.
  - **Coding style & naming conventions** already present.

---

## 6. **Cleanup & Maintenance**
- Regularly check for:
  - **Unnecessary/unused files** created during development.
  - **Dead code** (methods, variables, imports).
  - **Duplicate resources** (strings, layouts, drawables).
- Remove them to keep the codebase **clean and lean**.

---

## 7. **Documentation & Comments**
- Document changes in existing files when updating them.
- Add comments only where necessary (e.g., complex logic).
- Keep commit messages **clear and meaningful**:
  - `Updated AddressSelector for new region support` ✅
  - `Fixed stuff` ❌

---

## 8. **Testing First Approach**
- After updating existing code or adding new functionality:
  - Ensure **unit tests/UI tests** are updated.
  - Verify **backward compatibility** with existing features.
- Never push untested or unstable code.

---

## ✅ Golden Rule
> **Before creating something new, always ask: Can I reuse or update what already exists?**

