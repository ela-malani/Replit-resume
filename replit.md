# Ela Malani Portfolio

## Overview

This is a personal portfolio/resume website for Ela Malani, a Staff Product Manager with experience at Dropbox and Microsoft. The application is built as a full-stack TypeScript project with a React frontend and Express backend, designed to showcase professional experience, patents, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight alternative to React Router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming (light/dark mode support)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Build Tool**: Vite with HMR support

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript compiled with tsx
- **API Structure**: RESTful endpoints prefixed with `/api`
- **Static Serving**: Express serves built frontend assets in production

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between frontend and backend)
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod
- **Storage Pattern**: Repository pattern with `IStorage` interface for data access abstraction
- **Current Implementation**: In-memory storage (MemStorage) - can be swapped for database implementation

### Build System
- **Development**: Vite dev server with HMR proxied through Express
- **Production**: 
  - Frontend: Vite builds to `dist/public`
  - Backend: esbuild bundles server to `dist/index.cjs`
  - Selective dependency bundling for faster cold starts

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/ui/  # shadcn/ui components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities and query client
│   │   └── pages/          # Route components
├── server/           # Express backend
│   ├── index.ts      # Entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data access layer
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code between frontend/backend
│   └── schema.ts     # Database schema and types
└── migrations/       # Drizzle database migrations
```

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **Drizzle Kit**: Database migration and schema push tooling

### UI Framework
- **Radix UI**: Headless component primitives (accordion, dialog, dropdown, etc.)
- **shadcn/ui**: Pre-styled component variants using Tailwind

### Development Tools
- **Replit Plugins**: 
  - `@replit/vite-plugin-runtime-error-modal` for error display
  - `@replit/vite-plugin-cartographer` for development features
  - `@replit/vite-plugin-dev-banner` for development environment indicator

### Key Libraries
- **TanStack Query**: Async state management and caching
- **class-variance-authority**: Component variant management
- **date-fns**: Date formatting utilities
- **react-icons**: Icon library (includes brand icons like Dropbox, LinkedIn)