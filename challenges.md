# Project Challenges & Solutions

This document records the technical difficulties encountered during the development of the portfolio website and their respective solutions.

## 1. Syntax Error in `projects.ts`
- **Issue**: A `',' expected` syntax error occurred in `data/projects.ts`.
- **Cause**: The error was caused by unescaped backticks (`` ` ``) inside a template literal string. Specifically, the text `real-time updates using `StringVar`` broke the surrounding template string structure.
- **Solution**: Escaped the inner backticks using a backslash: `` \`StringVar\` ``.

## 2. Video & HTML Rendering in Markdown
- **Issue**: `<video>` and `<img>` tags embedded within the Markdown content of `projects.ts` were rendering as plain text instead of actual media elements on the Project Detail page.
- **Cause**: The `react-markdown` library escapes HTML by default for security, preventing the rendering of raw HTML tags.
- **Solution**: 
    1. Installed the `rehype-raw` plugin: `npm install rehype-raw`.
    2. Updated `app/projects/[id]/page.tsx` to import `rehypeRaw` and pass it to the `ReactMarkdown` component: `<ReactMarkdown rehypePlugins={[rehypeRaw]}>`.

## 3. Firebase Upload Permissions
- **Issue**: Persistent `AccessDeniedException` errors when attempting to upload images and files via the Admin panel.
- **Cause**: Likely misconfigured Firebase Storage rules or authentication state issues preventing direct file writes.
- **Solution**: Implemented a workaround by modifying the data structure to accept direct Image/Video URLs instead of requiring file uploads, bypassing the storage permission issues for the time being.

## 4. TypeScript Arithmetic Type Errors
- **Issue**: Error stating "The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type."
- **Cause**: TypeScript strict type checking flagged operations where a variable's type was inferred as potentially `undefined` or a non-numeric type (like `string`).
- **Solution**: Added proper type guards and explicit type casting to ensure variables were treated as numbers before arithmetic operations.

## 5. Complex Layout Integration (Fuwari Theme)
- **Issue**: Adapting the complex, animation-heavy "Fuwari" layout while preserving the user's existing color palette and font choices.
- **Cause**: The need to merge two distinct design systems—the structural/animation logic of Fuwari and the aesthetic identity (colors/fonts) of the existing portfolio.
- **Solution**: Carefully refactored the layout components (Sidebar, Grid) to use the new structure but applied utility classes that referenced the existing CSS variables for colors and fonts.

## 6. Expanding Project Data Structure
- **Issue**: The original `Project` interface only supported a single image and no video.
- **Cause**: New requirements to show multiple media assets per project.
- **Solution**: 
    1. Updated the `Project` interface to include `images: string[]` and `videos: string[]`.
    2. Refactored `ProjectDetail` to iterate over these arrays and render grids of media, while maintaining backward compatibility for projects with single `imageUrl` or `videoUrl`.
