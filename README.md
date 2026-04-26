# HackerRoll — Landing

Dark, editorial-futurist landing + blog + advertise site for an AI news-to-video mobile app. React 19 + Vite 7 + Tailwind v4 + react-router, pure-CSS animations, zero external asset dependencies beyond Google Fonts.

## Routes

| Path              | Page          | Purpose                                       |
|-------------------|---------------|-----------------------------------------------|
| `/`               | Home          | Hero, features, download CTA                  |
| `/blog`           | Blog          | Field notes index                             |
| `/blog/:slug`     | Blog post     | Long-form post reader                         |
| `/advertise`      | Advertise     | Formats, rate card, inquiry form for brands   |
| `/support`        | Support       | App support, billing help, contact form       |
| `/privacy`        | Privacy       | Privacy policy and data practices             |
| `/terms`          | Terms         | Product terms and acceptable use              |
| `*`               | NotFound      | 404 with recovery links                       |

SPA fallback is handled by `public/_redirects` (`/* → /index.html 200`) on Cloudflare Pages.

## Dev

```bash
npm install
npm run dev        # http://localhost:5173
npm run lint       # eslint flat config
npm run build      # → dist/
npm run preview    # serve dist/ locally
```

## Analytics hooks

Every CTA and form carries stable `id` + `data-event` attributes so a dashboard layer can wire funnels without DOM spelunking:

| Surface          | Element                         | `id`                        | `data-event`                |
|------------------|---------------------------------|-----------------------------|-----------------------------|
| Header           | Download button                 | `cta-header-download`       | `download_click_header`     |
| Hero             | Primary download CTA            | `cta-hero-download`         | `download_click_hero`       |
| Hero             | Secondary "How it works"        | `cta-hero-how`              | `how_it_works_click`        |
| Hero             | Email capture (form)            | `form-early-access`         | `early_access_form_submit`  |
| Hero             | Email input (focus)             | `email-early`               | `early_access_email_focus`  |
| Hero             | Email capture submit button     | `cta-early-access-submit`   | `early_access_submit_click` |
| Feature band     | Download button                 | `cta-band-download`         | `download_click_band`       |
| Feature band     | Android waitlist link           | `cta-band-android`          | `android_waitlist_click`    |
| Feature cards    | Card wrappers                   | —                           | `feature_card_view`         |
| Footer           | Privacy link                    | `link-privacy`              | `footer_privacy_click`      |
| Footer           | Terms link                      | `link-terms`                | `footer_terms_click`        |
| Footer           | Blog link                       | `link-blog`                 | `footer_blog_click`         |
| Footer           | Advertise link                  | `link-advertise`            | `footer_advertise_click`    |
| Footer           | Support link                    | `link-support`              | `footer_support_click`      |
| Footer           | Press link                      | `link-press`                | `footer_press_click`        |
| Blog             | Post list item (per post)       | `blog-post-<slug>`          | `blog_post_open`            |
| Blog             | Subscribe form                  | `form-blog-subscribe`       | `blog_subscribe_submit`     |
| Blog             | Subscribe submit                | `cta-blog-subscribe`        | `blog_subscribe_click`      |
| Advertise        | Format card CTAs                | `cta-format-<nn>`           | `ad_format_inquire_click`   |
| Advertise        | Inquiry form                    | `form-advertise-inquiry`    | `ad_inquiry_submit`         |
| Advertise        | Inquiry submit                  | `cta-advertise-submit`      | `ad_inquiry_submit_click`   |
| Advertise        | Contact mailto                  | `link-email-ads`            | `ads_mailto_click`          |
| Support          | Support form                    | `form-support`              | `support_form_submit`       |
| Support          | Support submit                  | `cta-support-submit`        | `support_submit_click`      |

Each interactive element also carries `data-surface` where useful (`header`, `hero`, `feature_band`) for funnel segmentation.

## Cloudflare Pages

This project is structured to ship directly on Cloudflare Pages. No external host config is included.

**Dashboard settings (zero-config deploy):**
- **Framework preset:** _None_ (or _Vite_)
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `HackerRollLanding/new`
- **Environment:** `NODE_VERSION=20`

**Or via Wrangler CLI:**
```bash
npm run build
npx wrangler pages deploy dist --project-name=hackerroll-landing
```

`public/_headers` and `public/_redirects` are copied into `dist/` by Vite and are read natively by Cloudflare Pages:
- `_headers` — security headers + long cache for hashed assets
- `_redirects` — SPA fallback (`/* → /index.html 200`) for future client routing
