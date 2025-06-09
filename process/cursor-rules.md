---
layout: page
title: Cursor Coding Rules & Prompts
description: How to use Cursor rules and prompts to ensure code quality and
             style alignment across languages and projects.
nav_exclude: true
---

This document explains how to use Cursor rules and prompts to ensure
contributors understand and follow your coding style and preferences. Use these
rules as a reference for yourself, your team, and as prompt templates for AI
coding assistants.

## Organising Cursor Rules

To maintain clarity and consistency across your projects, it is recommended to
store your Cursor rules in a dedicated `.cursor/rules` directory at the root of
your repository. This approach ensures that all contributors and AI coding
assistants can easily locate and reference your coding standards.

**Best Practices for Organising and Naming Cursor Rules:**

- **Directory Structure:**  
  Create a `.cursor/rules/` folder in your repository root.  
  Example:

  ```text
  .cursor/
    rules/
      go.mdc
      vue.mdc
      python.mdc
      general.mdc
  ```

- **File Naming:**  
  Name each rule file according to the language or technology it covers, using
  lowercase and hyphens if needed (e.g., `go.md`, `vue.mdc`, `python.mdc`,
  `ci-cd.mdc`). For general or cross-language rules, use names like `general.mdc`
  or `conventions.mdc`.

- **Content Structure:**  
  Each rule file should include:
  a. A brief description of the rule’s purpose.
  a. Coding standards and best practices.
  a. Example prompts for AI assistants.
  a. Folder structure recommendations (if relevant).
  a. Any project-specific conventions.

- **Referencing Rules:**  
  Reference these files in your project documentation (e.g., `README.md` or
  `CONTRIBUTING.md`) so contributors know where to find and how to use them.

- **Version Control:**  
  Keep your `.cursor/rules/` directory under version control to track changes
  and ensure all contributors are aligned with the latest standards.

By following this structure, you make it easy for both humans and AI tools to
understand and apply your coding preferences, leading to more consistent and
maintainable codebases.

---

## Jekyll Markdown

See `.cursor/rules/markdown.mcd`.

---

## 1. Go (Golang) Coding Standards

**Style:**

- Follow the standards of popular repositories (e.g., HashiCorp,
  Kubernetes).
- Use modern Go features (e.g., `iter.Seq`, `slog` for logging).
- Prefer clear, idiomatic Go over cleverness.
- Use `internal/` for private packages, `cmd/` for CLI entrypoints, and avoid
  the legacy `pkg/` folder.
- Structure code for testability and maintainability.

**Example Prompt:**

```text
Write clean, idiomatic Go code that follows the standards of popular open-source
repositories like HashiCorp. Use modern Go features such as `iter.Seq` for
iteration and `slog` for logging. Structure the code with clear separation of
concerns, using `internal/` for private packages and `cmd/` for CLI entrypoints.
Avoid the legacy `pkg/` folder. Ensure the code is well-documented, tested, and
easy to maintain.
```

**Folder Structure Example:**

```text
myapp/
  cmd/           # CLI entrypoints
  internal/      # Private application code
  api/           # Public API definitions
  cli/           # CLI logic (if applicable)
  go.mod
  main.go
```

**Suggestions:**

- Use context for cancellation and deadlines.
- Prefer interfaces for testability.
- Use Go modules.
- Write table-driven tests.

---

## 2. Vue/.js SPA Coding Standards

**Style:**

- Use the Composition API for all new code.
- Use [shadcn-vue](https://ui.shadcn.com/) components for UI.
- Use Pinia for state management (instead of Vuex).
- Organise code into **module** folders, each with:
  a. `view-model/`
  a. `composables/`
  a. `views/`
  a. `logic/`
- Prefer TypeScript for new code.
- Keep components small and focused.

**Example Prompt:**

```text
Write a Vue 3 SPA module using the Composition API, shadcn-vue components for
UI, and Pinia for state management. Organise the code into a module folder with
subfolders: `view-model`, `composables`, `views`, and `logic`. Use TypeScript
where possible. Ensure the code is clean, well-typed, and follows best practices
for maintainability and scalability.
```

**Folder Structure Example:**

```text
my-spa/
  src/
    modules/
      user/
        view-model/
        composables/
        views/
        logic/
    stores/         # Pinia stores
    shared/         # Shared across all modules
    main.ts
```

**Suggestions:**

- Use script setup syntax for SFCs.
- Keep business logic out of components (use composables and logic folders).
- Write unit and integration tests for composables and logic.

---

## 3. Universal Coding Rules (All Languages)

- Write clean, well-structured, and idiomatic code.
- Follow the best practices and conventions of the language and framework.
- Organise code into logical, discoverable folders (e.g., `internal/`, `cli/`,
  `modules/`, not legacy `pkg/` for Go).
- Separate concerns: keep business logic, UI, and data access distinct.
- Write meaningful documentation and comments.
- Prioritise testability and maintainability.
- Use modern language features and libraries where appropriate.
- Avoid anti-patterns and legacy structures unless required for compatibility.

**General Prompt Example:**

```text
Write clean, idiomatic code that follows the best practices and folder
structures for this language and framework. Organise code for clarity,
maintainability, and testability. Use modern features and avoid legacy patterns
unless necessary. Document your code and provide tests where appropriate.
```

---

**How to Use These Rules in Cursor:**

- Reference these prompts when starting a new file or module.
- Share this document with contributors to align on style and structure.
- Use the folder structure examples as templates for new projects.
- Adapt the suggestions to your team's evolving standards.
