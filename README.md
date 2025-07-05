# Personal Website

This project is a simple Next.js site configured with Tailwind CSS.

## Requirements

- Node.js **18** or newer.

## Getting Started

1. Install dependencies (or run the setup script):

```bash
npm install
# or
./setup.sh
```

2. Run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Bento Tile Layout

The landing page arranges content in a Bento-style grid. Tiles are simple
`<section>` elements inside a container with the `bento-grid` class defined in
`pages/index.tsx`. Each tile scales on hover and drops into place with the
`fall` animation. Page changes trigger an overlay from `BentoPageTransition`
that uses `spill-in` and `spill-out` animations.

### Customizing tiles

Update the tile markup in `pages/index.tsx` to change text, colors or sizing.
Animation keyframes live in `tailwind.config.js`, while the transition overlay
styles are in `styles/globals.css`.

Run the dev server and open `http://localhost:3000` to preview updates. You can
add screenshots under `public/screenshots` and reference them here, for
example:

```md
![Home page screenshot](public/screenshots/home.png)
```

## Development Scripts

### Start the dev server

```bash
npm run dev
```

### Lint

```bash
npm run lint
```

### Tests

```bash
npm test
```

### Build for production

```bash
npm run build
```

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

## Telemetry

This project uses Next.js, which collects anonymous telemetry by default.
See [Next.js telemetry documentation](https://nextjs.org/telemetry) for details,
including how to opt out with:

```bash
npx next telemetry disable
```
