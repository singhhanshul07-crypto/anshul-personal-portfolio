# Workspace Instructions

- Keep personal identity and site-wide editable values in `src/config/`.
- Keep structured portfolio content in `src/data/`; do not hardcode project content into shared components.
- Build reusable interface primitives in `src/components/` and page compositions in `src/sections/`.
- Keep global design tokens and responsive foundations in `src/styles/global.css`.
- Reuse motion presets from `src/animations/variants.ts`; respect `prefers-reduced-motion` for new interactions.
- Mark future project media with `data-cursor="view"` to opt into the custom cursor's VIEW state.
- Use React with TypeScript, Tailwind CSS v4, and Framer Motion; follow the existing Vite configuration.
- Preserve the restrained cinematic direction: charcoal, warm ivory, beige, champagne, and subtle gold.
- Prefer accessible semantic markup, keyboard-visible focus, responsive layouts, and reduced-motion support.
