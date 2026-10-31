# Northline Studio — Next.js landing page

Ready-to-copy landing page built for Next.js App Router + TypeScript + Tailwind CSS v4.

## Files
- `app/page.tsx` — landing page sections and inline SVG icons
- `app/layout.tsx` — metadata and Poppins + Montserrat via `next/font/google`
- `app/globals.css` — Tailwind import, design tokens, responsive styling

## Install
Copy the three files into your existing `app/` directory (or `src/app/` if your project uses a `src` directory), replacing the existing files.

This stylesheet assumes Tailwind CSS v4. Its `app/globals.css` starts with `@import "tailwindcss";`.

Run:
```bash
npm run dev
```

## Customize before publishing
- Replace `NORTHLINE` / `NORTHLINE STUDIO` with your studio name.
- Replace `hello@yourstudio.com` in `app/page.tsx` with your real contact email.
- Replace the sample dashboard labels and values in the hero with your own product screenshot or real interface. The current dashboard is an illustrative visual, not client data.
- Update the metadata in `app/layout.tsx`.
