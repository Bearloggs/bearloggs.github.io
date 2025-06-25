# Personal Blog Built with Astro

A modern, performant personal blog built with Astro, TypeScript, and Tailwind CSS. This blog features a clean design, MDX support, syntax highlighting, and various integrations including GitHub projects showcase.

## Features

- Built with [Astro](https://astro.build) for optimal performance
- Styled with [Tailwind CSS](https://tailwindcss.com)
- MDX support for rich content
- Built-in search functionality
- Responsive design
- Dark mode support
- GitHub projects integration
- Table of contents for blog posts
- Tag system for content organization
- SEO optimized with sitemap generation

## Tech Stack

- [Astro](https://astro.build) - Static Site Generator
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [MDX](https://mdxjs.com/) - Content Authoring
- [Shiki](https://shiki.matsu.io/) - Syntax Highlighting
- [ESLint](https://eslint.org/) - Code Linting
- [Prettier](https://prettier.io/) - Code Formatting

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Bearloggs/bearloggs.github.io.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the site for production
- `npm run preview` - Preview the production build locally
- `npm run check` - Run Astro's built-in diagnostics (type, config, and content checks)
- `npm run format` - Format code with Prettier
- `npm run typecheck` - Check TypeScript types

## Continuous Integration (CI) & Security

This project uses GitHub Actions for automated testing and security checks:

- **Test and Security Workflow** (`.github/workflows/test.yml`):
  - Runs on all pull requests and pushes to the `main` branch.
  - Steps include type checking, code formatting, building, and running tests.
  - If a pull request has the `security` label, additional security checks (`npm audit` and `audit-ci`) are run automatically.

You can view workflow results in the GitHub Actions tab of your repository.

## Project Structure

```
├── src/
│   ├── components/     # Reusable UI components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   ├── content/        # Blog content
│   ├── utils/          # Utility functions
│   └── assets/         # Static assets
├── public/             # Public static files
└── scripts/            # Build and utility scripts
```

### Modifying Styles

- Global styles are managed through Tailwind CSS
- Component-specific styles are in their respective `.astro` files
- Custom Tailwind configuration can be found in `tailwind.config.mjs`
