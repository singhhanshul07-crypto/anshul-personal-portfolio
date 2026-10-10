# Anshul — Developer, Builder & Creative

A personal portfolio built with React, TypeScript, Vite, and Framer Motion. It uses a warm espresso, clay, taupe, stone, and cream palette with layered 3D-inspired visuals and motion.

## Run locally

Requires Node.js 20.19+ or 22.12+ and npm.

```sh
npm install
npm run dev
```

Create a production build with `npm run build`, or preview it locally with `npm run preview`.

## Site content

- Edit the name, introduction, current focus, biography, contact details, profile URLs, and portrait paths in `src/config/site.ts`.
- Add project records in `src/data/projects.ts`.
- Add experience and milestones in `src/data/experience.ts` and `src/data/achievements.ts`.
- Adjust capability copy in `src/data/services.ts`.
- Public images, portrait media, favicon, and Open Graph artwork live in `public/`.

The contact form opens a prefilled email draft when an address is configured. Until then, it copies the note to the clipboard; it does not send or store form submissions. Social links and the CV link are omitted until configured.

## Publishing

Before publishing, replace the example canonical and Open Graph URLs in `index.html` with the final public site URL. The Vite production build outputs to `dist/`.

Reduced-motion preferences are respected. Primary section links are defined in `src/data/navigation.ts`, and motion presets are in `src/animations/variants.ts`.
