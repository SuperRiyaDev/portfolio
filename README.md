# Portfolio

Personal portfolio site—built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Edit your content

Site copy, projects, and skills live in [`content/portfolio.ts`](content/portfolio.ts).

Optional: set `about.photoSrc` to an image path under `public/` (for example `/projects/profile-photo.jpeg`).

### Project images & links

For each entry in `projects[]`:

- `imageSrc` — path under `public/` (e.g. `/projects/maxai.png`) or an `https://` screenshot URL
- `imageAlt` — short description for screen readers
- `repoUrl` — GitHub/GitLab repo
- `links` — product feature pages, write-ups, etc. (`label` + `href`)

### Tech blog

Posts live in [`content/blog.ts`](content/blog.ts). The index is at [`/blog`](http://localhost:3000/blog).

Boilerplate (commented examples):

- [`content/blog.post.boilerplate.ts`](content/blog.post.boilerplate.ts) — copy-paste post objects (on-site, external, coming soon)
- [`components/blog/BlogPostBoilerplate.tsx`](components/blog/BlogPostBoilerplate.tsx) — optional custom post layout (not wired by default)

- `slug`, `title`, `date`, `excerpt`, optional `tags`
- `body` — Markdown strings (links, headings, lists) plus optional `{ type: "image", src, alt, caption? }` blocks; images in `public/blog/…`
- `href` — external URL when the full article lives elsewhere
- `comingSoon: true` — listed without a link until the post is live

### Update blog from your phone (GitHub → Vercel)

1. Open your portfolio repo on GitHub → **`content/blog.ts`** → **Edit**.
2. Add or update a post in the `posts` array.
3. Commit to **`main`**. Vercel redeploys automatically.

Site copy uses the same flow via [`content/portfolio.ts`](content/portfolio.ts).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Default Next.js settings; build command `npm run build`.

## Features

- **Theme toggle** (nav): Dark ↔ Light (saved in `localStorage`).
- **Scroll-spy nav** and section animations (respects `prefers-reduced-motion` where applied).
