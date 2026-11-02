# Portfolio - Rubens Diniz

Source for [rubensdiniz.dev](https://www.rubensdiniz.dev/), a one-page bilingual portfolio built with Next.js (App Router), Emotion and next-intl.

## Development

```sh
npm install
npm run dev
```

The site runs at http://localhost:3000.

| Script                 | Purpose                          |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start the dev server             |
| `npm run build`        | Build, lint and type-check       |
| `npm run start`        | Serve the production build       |
| `npm run lint`         | Run ESLint                       |
| `npm run format`       | Format the code with Prettier    |
| `npm run format:check` | Check formatting (also run in CI) |

## Structure

- `src/app/[locale]/` - the page and root layout, including metadata
- `src/library/` - components and shared constants, each in its own folder
- `src/messages/` - translations, one file per locale
- `public/` - images and the CV

## Translations

Portuguese is the default locale and is served at `/`. English is served at `/en`.

To add a locale, add it to `src/library/Locales`, create `src/messages/<locale>.json`, and add its flag in `src/library/LocaleSwitcher`.
