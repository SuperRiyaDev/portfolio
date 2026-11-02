# Supriya Dutta

Personal site. Plain HTML and CSS, no build step, served from GitHub Pages.

Live: [superriyadev.github.io/portfolio](https://superriyadev.github.io/portfolio/)

## Structure

- `index.html`: home (projects, about, blog, contact)
- `projects/*.html`: one case study per project
- `styles.css`: all styling (dark by default, light via system setting)
- `assets/`: photo, resume PDF, favicon, `projects/` screenshots
- `resume/`: LaTeX source and PDF of the resume

## Preview locally

```bash
python -m http.server 8080 --bind 127.0.0.1
```

Open [http://127.0.0.1:8080](http://127.0.0.1:8080).

## Deploy

Push to `main`; GitHub Actions publishes the site.

First time only: repo **Settings → Pages → Source: GitHub Actions**.
