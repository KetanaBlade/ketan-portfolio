# AI Collaboration Guidelines

This document outlines the principles, standards, and workflows for our collaboration. It is intended to be technology-agnostic to ensure high quality across various projects, though it should be applied strictly within the context of the current technology stack (e.g., Astro, React, etc.).

## 1. Performance & Adaptability
*   **Mobile-First:** Design and verify layouts for small screens first, then scale up.
*   **Responsive Assets:** Always use responsive image techniques (e.g., `srcset`, `picture` elements) to serve the appropriate file size for the user's device. Avoid serving desktop-sized assets to mobile devices.
*   **Core Web Vitals:** Prioritize LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift), and FID (First Input Delay). Defer non-critical JavaScript and CSS.

## 2. Inclusive Design (Accessibility)
*   **Standard:** Target **WCAG 2.1 AA** compliance or higher.
*   **Semantics:** Use proper semantic HTML elements (`<button>`, `<nav>`, `<main>`, `<article>`) over generic `<div>` wrappers.
*   **Navigation:** Ensure all interactive elements are keyboard accessible and have visible focus states.
*   **Content:** Provide `alt` text for meaningful images and ensure sufficient color contrast ratios.

## 3. Maintainable & Semantic Architecture
*   **DRY (Don't Repeat Yourself):** Abstract repetitive patterns into reusable components.
*   **Design Tokens:** Use variables (CSS Custom Properties or preprocessor variables) for colors, spacing, typography, and breakpoints. Avoid hard-coded "magic numbers" or hex codes in component logic.
*   **Type Safety:** Prefer strong typing (e.g., TypeScript) where available to catch errors early and document data structures.
*   **Code Clarity:** Prioritize readable code over clever code. Use descriptive variable and function names.

## 4. Discoverability & Metadata
*   **System Files:** Ensure `sitemap.xml`, `robots.txt`, and `llms.txt` are present and up-to-date with every significant structural change.
*   **Social & SEO:** Implement Open Graph tags (OG) and basic JSON-LD structured data to ensure content is shareable and machine-readable.

## 5. Version Control Hygiene
*   **Atomic Commits:** Make small, logical commits focused on a single task. Avoid massive "catch-all" commits.
*   **Batched Refinements:** During iterative polishing or sessions involving multiple related small tweaks (e.g., typography, colors, padding across multiple files), **batch** these changes into a single logical commit once a cohesive state is reached to improve token efficiency and maintain a cleaner history.
*   **Conventional Commits:** Use descriptive messages following standard conventions (e.g., `feat:`, `fix:`, `refactor:`, `docs:`) to create a readable history.
*   **History usage:** If a feature needs to be reverted, use `git revert` or checkout previous states rather than manually rewriting code to "undo" it.
*   **Push Protocol:** Commit often locally. When a significant milestone is reached or the session is concluding, explicitly ask the user if they would like to push the changes to the remote repository (GitHub).
*   **Regular Versioning:** Commit locally at your discretion after any useful unit of work. Do not wait for user instruction to create safe checkpoints.

## 6. Security & Stability
*   **Secret Safety:** **NEVER** commit API keys, tokens, or credentials. Use environment variables.
*   **Sanitization:** Validate and sanitize external inputs.
*   **Link Safety:** Use `rel="noopener noreferrer"` for external links to prevent security vulnerabilities.

## 7. Verification & Self-Correction
*   **Double Check:** Before signaling task completion, verify that new files are properly exported/imported and that no broken links were introduced.
*   **Linting:** Adhere to the project's linting and formatting rules (e.g., Prettier, ESLint) automatically.

## 8. Tone & Voice
*   **Professional Clarity:** Use direct, professional language. Avoid "marketing-speak," buzzwords, or overly enthusiastic tones that sound artificial.
*   **Avoid AI-isms:** Do not use random punchy capitalized terms, unnecessary quotes for emphasis, or "catchy" slogans.
*   **Plain English:** Prioritize clear, concise explanations over complex jargon or flowery descriptions.

## 9. Confirmation & Proposals
*   **Questions First:** If the user asks a question (e.g., "Do you know why...", "What do you think..."), provide a clear answer and, if relevant, a proposal. **Do not** execute code changes until the user responds to the answer/proposal.
*   **Small Changes:** For direct requests (e.g., "Change the title to X") or minor fixes, proceed immediately without redundant confirmation.
*   **Complex Changes:** For ambiguous requests, architectural changes, or results of a long discussion, present a clear, bulleted **proposal** of the intended changes.
*   **Approval:** Wait for explicit user confirmation on the proposal before executing significant code modifications.
*   **Explicit Confirmation:** If the user asks to "confirm" an observation, behavior, or plan (e.g., "Can you confirm?"), provide a clear "Yes/No" confirmation and explanation **first**. **Do not** proceed with subsequent actions (like fixes or next steps) until the user explicitly responds to that confirmation.
