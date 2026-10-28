# Task: Audit and Fix Russian Orphaned Prepositions Across the Project

Act as a senior frontend developer and Russian-language typography specialist.

## Objective

Audit the entire codebase for Russian orphaned prepositions (висячие предлоги), conjunctions, and other short words that should not be separated from the following word by a line break.

The project uses Next.js App Router, React, TypeScript, Tailwind CSS, and shadcn/ui.

## 1. Scope of the audit

Inspect all project files that may contain user-facing Russian text, including:

- `src/app/**` — pages, layouts, metadata, and route-specific content.
- `src/components/**` — UI components, navigation, headers, footers, dialogs, drawers, forms, buttons, and tooltips.
- `src/lib/**` — content objects, constants, navigation labels, and data used to render text.
- Other files containing user-facing copy, including localization files, if present.

Include text rendered through JSX, template literals, constants, arrays, objects, and dynamically composed strings.

Do not limit the audit to the currently visible homepage.

## 2. What to detect

Look for Russian prepositions and short words that can become orphaned at the end of a rendered line, including but not limited to:

- `в`, `во`, `на`, `с`, `со`, `к`, `ко`
- `у`, `о`, `об`, `от`, `до`, `из`, `за`, `по`
- `под`, `над`, `при`, `для`, `без`, `через`, `между`
- `и`, `а`, `но`, `или` — where appropriate according to the project's typographic rules.

Examples of problematic text:

- `Работаю в` + line break + `Figma`
- `Дизайн для` + line break + `стартапов`
- `Связаться с` + line break + `вами`
- `Опыт и` + line break + `развитие`

Do not assume that every occurrence of these words is an error. Evaluate the actual phrase and whether the word can be separated from the following word.

## 3. How to fix the issues

For Russian-language UI text, use a non-breaking space (`\u00A0`) between a preposition and its following word where appropriate.

Examples:

- `Работаю в\u00A0Figma`
- `Дизайн для\u00A0стартапов`
- `Связаться с\u00A0вами`
- `Опыт и\u00A0развитие`

In JSX, preserve valid syntax and the existing component structure. Prefer a non-breaking space character (`\u00A0`) or an explicit Unicode escape in string expressions, depending on the surrounding code.

For example:

```tsx
<p>{'Работаю в\u00A0Figma'}</p>
```

For static JSX text, an HTML entity may be appropriate:

```tsx
<p>Работаю в&nbsp;Figma</p>
```

Choose the simplest approach consistent with the existing codebase.

### Important typography rules

- Preserve the original wording, meaning, punctuation, capitalization, and tone.
- Do not rewrite marketing copy unless a correction is required to fix the orphan.
- Do not insert non-breaking spaces indiscriminately between every short word.
- Keep prepositions attached to the following word, not the preceding word.
- Apply the same rule to dynamically rendered content where the text can be safely corrected at its source.
- Avoid introducing invisible characters into identifiers, URLs, email addresses, code, or non-user-facing technical strings.

## 4. Technical constraints

- Do not change the application's visual design or layout intentionally.
- Do not modify component APIs, routing, business logic, form validation, or application behavior.
- Do not add dependencies.
- Do not replace existing components or refactor unrelated code.
- Preserve compatibility with Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui.
- Do not modify generated files, build output, dependencies, or lockfiles.

## 5. Verification

After making the corrections:

1. Run the project's available lint command.
2. Run TypeScript checks if a suitable script or existing configuration is available.
3. Run a production build if the environment and dependencies allow it.
4. Check the diff for unintended changes.
5. Search again for remaining suspicious Russian prepositions and short words in user-facing text.

Do not claim that all issues are fixed unless the relevant files have actually been inspected.

## 6. Final report

Provide a concise report containing:

- Files inspected.
- Files modified.
- Examples of corrected phrases.
- Any remaining suspicious cases that require manual review.
- Commands executed and their results.
- Any limitations, including files or dynamically generated text that could not be inspected.

## Expected outcome

All identified Russian orphaned prepositions in the project's user-facing text are corrected with appropriate non-breaking spaces, while preserving the original design, wording, and application functionality.

Start by inspecting the project structure and identifying the source of all user-facing Russian copy. Then perform the audit, apply minimal targeted fixes, and verify the changes.