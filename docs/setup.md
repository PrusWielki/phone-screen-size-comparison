# Setup and Development

## Commands

Run from project root:

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server (`localhost:4321`) |
| `npx astro dev --background` | Start dev server in background |
| `npx astro dev stop` | Stop background dev server |
| `npx astro dev status` | Check background dev server status |
| `npx astro dev logs` | Show background dev server logs |
| `npm run build` | Build static site to `./dist/` |
| `npm run preview` | Preview production build locally |

## GitHub Pages Deployment

GitHub Actions workflow builds and deploys on push to `main`.
To enable:
1. Open repo settings on GitHub
2. Select **Pages**
3. Set source to **GitHub Actions**
4. Site deploys at `https://PrusWielki.github.io/phone-screen-size-comparison/`
