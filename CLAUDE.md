# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React/TypeScript marketing website for "Born to Win Hearts" - a Portuguese Water Dog breeder (Portugiesische Wasserhunde Zucht). The site is built with Vite, React Router, Tailwind CSS, and Framer Motion for animations.

## Development Commands

```bash
npm run dev      # Start development server on http://localhost:3000
npm run build    # Type check and build for production
npm run preview  # Preview production build
npm run lint     # Type check without emitting files
```

The dev server auto-opens at port 3000 (configured in vite.config.ts).

## Architecture

### Routing Structure

The app uses React Router with the following routes:
- `/` - HomePage
- `/ueber-uns` - AboutPage
- `/unsere-hunde` - DogsPage
- `/geplante-wuerfe` - LittersPage
- `/wissenswertes` - KnowledgePage
- `/kontakt` - ContactPage

All routes are wrapped in a Layout component that provides the Header and Footer.

### Component Organization

**Layout Components** (`src/components/layout/`)
- `Header.tsx` - Fixed header with mobile menu. Uses `isScrolled` and `isMobileMenuOpen` states to control styling (white bg + dark text when scrolled or menu open, transparent + white text otherwise)
- `Footer.tsx` - Site footer
- `Layout.tsx` - Wrapper component

**Section Components** (`src/components/sections/`)
- HomePage is composed of multiple section components imported and rendered in sequence
- Sections include: HeroSection, TrustBadgesSection, StorySection, ChampionsSection, WaitlistSection, TestimonialsSection, ExpertiseSection

**Common Components** (`src/components/common/`)
- Reusable UI components: Button, Card, Tabs, WaveDivider

**Forms** (`src/components/forms/`)
- WaitlistForm.tsx uses react-hook-form with zod validation

### Styling System

**Tailwind Configuration** (`tailwind.config.js`)
- Custom color palette: ocean-blue (#0A4D68), petrol (#088395), sand (#E8DCC4), earth (#C4A57B), gold (#FFD700)
- Typography: Inter (sans), Montserrat (heading), Playfair Display (accent)
- Custom animations: float, fade-in, slide-in-up, pulse-subtle
- Box shadows: elevation-1, elevation-2, elevation-3

**CSS Utilities** (`src/styles/index.css`)
- Component classes: `.btn`, `.btn-primary`, `.btn-secondary`, `.card`, `.section`, `.eyebrow`, `.section-title`, `.input`, etc.
- Gradient utilities: `.gradient-ocean`, `.gradient-sand`, `.gradient-overlay`
- Container: `.container-custom` provides consistent max-width and padding

### Custom Hooks

**useScrollAnimation** (`src/hooks/useScrollAnimation.ts`)
- Intersection Observer hook for scroll-triggered animations
- Returns `{ ref, isVisible }` for use with Framer Motion animations
- Options: `threshold`, `triggerOnce`, `rootMargin`

### Key Patterns

1. **Animations**: Most page sections use Framer Motion with `useScrollAnimation` for scroll-triggered reveals
2. **Responsive Design**: Mobile-first approach with `lg:` breakpoints for desktop layouts
3. **Type Safety**: Full TypeScript with strict mode enabled
4. **Path Aliases**: `@/` maps to `./src` (configured in vite.config.ts)
5. **Mobile Menu Behavior**: Header changes background to white and text to dark when mobile menu opens, regardless of scroll position

## Form Handling

Forms use react-hook-form + zod for validation. See WaitlistForm.tsx for the pattern.

## Navigation Links

The "Welpen anfragen" button in Header scrolls to `#warteliste` element on HomePage, or redirects to `/#warteliste` from other pages.
