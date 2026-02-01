# Axis Cambrils - Fisioterapia Landing Page

## Project Overview
Multilingual landing page for Axis Cambrils physiotherapy center with integrated blog.

## Tech Stack
- Astro 4.x (SSG)
- TypeScript (strict mode)
- Tailwind CSS
- Content Collections for blog posts
- Native Astro i18n (CA/ES/EN)

## Project Structure
- `/src/pages/` - Main landing page and blog pages (with i18n structure)
- `/src/components/` - Reusable UI components
- `/src/layouts/` - Page layouts
- `/src/content/` - Blog posts in Markdown
- `/src/i18n/` - Translation system (ui.ts, utils.ts)
- `/public/` - Static assets

## Development Guidelines
- Use Tailwind CSS for all styling
- Follow Astro best practices for performance
- Optimize images for web
- Ensure mobile-first responsive design
- Keep components modular and reusable
- Use translation keys from `/src/i18n/ui.ts` for all user-facing text
- Maintain type safety - run `npx astro check` before commits

## i18n Guidelines
- Default language: Catalan (no prefix in URL)
- Spanish: `/es/` prefix
- English: `/en/` prefix
- All new text must have translations in all 3 languages
- Use `getLangFromUrl()` and `useTranslations()` in components
