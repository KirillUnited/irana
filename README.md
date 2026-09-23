# Irina Korzh - Portfolio

A modern portfolio website for Irina Korzh, a web designer, built with Next.js 16, React 19, and shadcn/ui components.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Form Validation**: Zod
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Fonts**: DM Sans (sans-serif), Playfair Display (serif)

## Project Structure

```
src/
├── app/              # Next.js App Router pages and layouts
│   ├── globals.css   # Global styles with Tailwind CSS
│   ├── layout.tsx    # Root layout with metadata
│   └── page.tsx      # Home page
├── components/       # React components
│   ├── ui/          # shadcn/ui components (55+ components)
│   ├── portfolio.tsx # Portfolio component
│   └── error-boundary.tsx # Error boundary
├── hooks/           # Custom React hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
└── lib/             # Utility functions
    └── utils.ts     # cn() utility for className merging
```

## Features

- **Modern UI**: 55+ pre-built shadcn/ui components
- **Dark Mode**: Built-in dark mode support with CSS variables
- **Responsive Design**: Mobile-first approach with custom breakpoints
- **Type Safety**: Full TypeScript support
- **Form Validation**: Zod schemas for data validation
- **Animations**: Smooth animations with Framer Motion
- **Custom Typography**: DM Sans and Playfair Display fonts
- **Accessibility**: WCAG compliant components via Radix UI

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Adding New shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

### Styling

Global styles are in `src/app/globals.css`. Custom CSS variables are defined in the `:root` and `.dark` selectors for theme customization.

### Components

UI components are located in `src/components/ui/`. Each component is self-contained and can be used independently.

## Best Practices

- **App Router**: Uses Next.js App Router for file-based routing
- **Server Components**: Leverages React Server Components by default
- **TypeScript**: Strict TypeScript configuration for type safety
- **CSS Variables**: Uses CSS variables for theming (light/dark mode)
- **Component Composition**: Components are designed for composition and reusability
- **Performance**: Optimized images, fonts, and code splitting

## Deployment

This project can be deployed to any platform that supports Next.js:

- [Vercel](https://vercel.com) (recommended)
- [Netlify](https://netlify.com)
- [Railway](https://railway.app)
- Self-hosted with Node.js

## License

MIT
