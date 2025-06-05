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
   git clone https://github.com/yourusername/your-repo-name.git
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

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run typecheck` - Check TypeScript types

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
