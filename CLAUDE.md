# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Code formatting
npx prettier --write .
```

## Architecture Overview

This is an Astro-based static site for fireHouse Labs website built with:

- **Framework**: Astro 5.x with TypeScript
- **Styling**: Tailwind CSS with dark/light mode support
- **Interactivity**: Alpine.js for client-side behavior
- **Content**: Astro Content Collections for case studies and showcase projects
- **SEO**: astro-seo for metadata management
- **Compression**: astro-compress for optimization

### Key Architectural Patterns

**Content Management**: Uses Astro Content Collections with TypeScript schemas:
- `src/content/case-studies/` - Marketing case studies with structured metadata
- `src/content/showcase/` - Project showcase items
- Schema validation in `src/content/config.ts`

**Layout System**: 
- `src/layouts/Layout.astro` - Main layout with SEO, theme switching, and Alpine.js setup
- `src/layouts/CaseStudyLayout.astro` - Specialized layout for case study pages

**Component Organization**:
- `src/components/` organized by page sections (home/, about/, contact/, etc.)
- `src/components/layout/` for Header/Footer
- `src/components/showcase/` for project display components

**Routing**: File-based routing in `src/pages/` with dynamic routes for case studies

**Theme System**: Alpine.js store-based dark/light mode with localStorage persistence

**Code Style**: Prettier configured with Astro and Tailwind plugins, 100 char line width, single quotes