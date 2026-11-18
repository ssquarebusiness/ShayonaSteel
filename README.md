# Shayona Steel Fabrication Works — Website

Single-page Next.js site for Shayona Steel Fabrication Works, Nadiad (proprietor Chirag Patel).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

- **Business details** (phone, email, address, hours, WhatsApp message): `lib/site.ts`
- **Gallery photos**: put the image in `public/work/`, then add an entry (src, alt text, category, width, height) to `lib/gallery.ts`
- **Services text**: `components/Services.tsx`
- **About / why-us text**: `components/About.tsx`

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. On vercel.com → **Add New → Project** → import the repository → **Deploy** (no settings needed).
3. Optional: add a custom domain under Project → Settings → Domains.

Or from this folder: `npx vercel` (preview) and `npx vercel --prod` (production).
