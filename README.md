# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Custom

- Linting - [eslint config](https://github.com/nuxt/eslint-config)
- UI Library - [Element-plus](https://element-plus.org/) ???
- Styling - [Tailwindcss](https://tailwindcss.nuxtjs.org/examples/basic)
- Browse icons - [Nuxt-icon](https://icon-sets.iconify.design/tabler/chevron-left/)

- [Element-plus Nuxt starter](https://github.com/element-plus/element-plus-nuxt-starter)

- Booking demo scheduler - [Calendly](https://nuxt-calendly.vercel.app/)


## Font sizes

### headers with other fonts
- h1 96px = text-8xl
- h2 64px
- h3 48px = text-5xl
- h4 36px = text-4xl
- h5 32px
- h6 20px = text-xl

### headers with common font
- h4 36px bold = text-4xl

### regular text
- 36px = text-4xl
- 32px
- 24px = text-2xl

## Gtag events
| Event name            | settings |              comments |
|-----------------------|:--------:|----------------------:|
| booking_dialog_opened | place: 1 |  1: header; 2: others |
| linkedin_link_click   |    -     |                       |
| email_link_click      |    -     |                       |



## TODO
- add GTAG ID to envs or directly onto code
- fix changing view between login and Dashboard links. Use cookie instead of local-storage?
- remove button 'book a demo' from header when user is logged in
- hide dev version (railway.app) from bots - robots.txt, etc.
