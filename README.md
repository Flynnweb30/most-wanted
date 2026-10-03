# Most Wanted — Production Static Website

Original, dependency-free multi-page website for Most Wanted, a digital marketing agency.

## Pages

- `/`
- `/services/`
- `/about/`
- `/results/`
- `/faq/`
- `/contact/`

## Deployment

This project intentionally uses plain HTML, CSS and JavaScript. There is no npm install, bundler or client-side router, so it can be deployed as a true multi-page static site with minimal attack surface and fast cold loads.

### Render Static Site

- **Service type:** Static Site
- **Name:** `most-wanted-agency`
- **Build Command:** `echo "No build step required"`
- **Publish Directory:** `.`
- **Auto-Deploy:** Yes (recommended)

The repository root should contain `index.html`, the page directories and `assets/`.

### Important URL configuration

The supplied production metadata uses `https://most-wanted-agency.onrender.com` as the canonical site URL. If Render assigns a different service URL or you connect a custom domain, update the canonical URLs, Open Graph URLs, sitemap and robots sitemap URL in all six HTML pages plus `sitemap.xml` and `robots.txt`.

### Contact form

The form uses a native `mailto:` handoff and requires no server. The current destination is `hello@mostwanted.agency`. Replace that address in `contact/index.html`, `assets/site.js`, the footer and JSON-LD if a different mailbox will be used.

## Local test

Run a simple server from the project root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.
