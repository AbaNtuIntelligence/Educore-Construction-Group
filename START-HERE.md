# EDUCORE Construction Group — code and setup guide

## What is included

- `source/`: editable Next.js App Router, React, TypeScript and Tailwind CSS project.
- `ready-to-upload/`: the compiled website, ready for a domain or subdomain document root.
- Original company logo, three illustrative stock photographs and the eight-page company profile are included in both appropriate locations.

This is a single-page website. Navigation scrolls to sections. It includes the hero slideshow, sector disclosure panels, mobile menu, download links and direct contact actions. Tailwind CSS is compiled through PostCSS; custom CSS in `app/globals.css` handles the bespoke design. No Tailwind CDN is used.

## 1. Run on Windows

Install Node.js 22.13 or newer from https://nodejs.org/ (a supported LTS release). Close and reopen your terminal after installing it.

Extract this ZIP. Move the `EDUCORE-Construction-Website` folder to your Desktop. In PowerShell:

```powershell
cd "$env:USERPROFILE\Desktop\EDUCORE-Construction-Website\source"
node --version
npm.cmd ci
npm.cmd run dev
```

Open http://localhost:3000 in your browser. If the terminal assigns another port, use the URL it prints. Leave the terminal running while you work. Press Ctrl+C to stop it.

`npm.cmd` avoids the common PowerShell npm.ps1 execution-policy issue. Run commands from `source`, where package.json lives, not the outer download folder. The command assumes you placed the extracted folder on your Desktop; adjust the path if it is elsewhere or your Desktop is under OneDrive.

## 2. Edit the website

| File | What to change |
| --- | --- |
| `source/app/page.tsx` | Page sections, all service and sector copy, slider text, navigation, contact links and business particulars |
| `source/app/globals.css` | Colours, typography, spacing, responsive layouts and animation |
| `source/app/layout.tsx` | Browser title, search description, language and favicon reference |
| `source/public/images/logo.png` | Company logo |
| `source/public/images/architecture.jpg` | Hero slide 1 |
| `source/public/images/construction.jpg` | Hero slide 2 |
| `source/public/images/refurbishment.jpg` | Hero slide 3 and sector section image |
| `source/public/educore-company-profile-2026.pdf` | Downloadable company profile |
| `source/public/favicon.svg` | Browser tab icon |
| `source/next.config.ts` | Static-export configuration |
| `source/PHOTO-CREDITS.md` | Image sources and licence link |

Edit the `slides` array at the start of page.tsx for hero messages. The `services` and `sectors` arrays contain their respective copy. Contact details appear in several places: use your editor's Find All when changing the email address or phone number. Keep WhatsApp's number in international format without `+` or spaces: `27719450220`.

For replacement photos, use the same filenames or update every corresponding path. Prefer landscape images around 1600–2400 pixels wide, compressed for the web. Use your own verified project photos when available. Current imagery is illustrative and is not presented as completed EDUCORE projects.

## 3. Build after edits

Stop the development server, then run from `source`:

```powershell
npm.cmd run build
```

A successful build creates `source/out/`. That folder is the new deployment copy. Upload its CONTENTS after each rebuild; the original `ready-to-upload` folder does not update itself.

To preview the production export locally:

```powershell
npx.cmd serve out
```

The first run may ask to download the `serve` utility. Open the address it prints. Do not double-click index.html to test the site, and do not use `next start` for this static-export configuration.

Next.js static-export reference: https://nextjs.org/docs/app/guides/static-exports

## 4. Upload to Axxess / DirectAdmin

Use a dedicated construction domain or a dedicated subdomain with its own document root. The existing stationery website is a separate site: do not overwrite its `public_html` with this construction build unless you deliberately want to replace it.

1. Set up/select the construction domain or subdomain in your hosting account. Use the document-root path shown for that selected site; subdomain paths vary by hosting setup.
2. Back up any files currently in that document root.
3. For the first upload, open `ready-to-upload`. After code edits, use `source/out` instead.
4. Upload ALL files and folders inside it into the selected site's document root. The `index.html` and `_next` folder must sit together directly in that root. Do not upload an outer `ready-to-upload` folder as an extra level.
5. Keep `_next`, `images`, the PDF, favicon and other generated files intact. No Node.js process is needed on the host for this static export.
6. Use the domain's HTTPS address to test the site once DNS and hosting are active.
7. Check every slide, mobile menu, sector panel, PDF download, telephone, email and WhatsApp link. Hard-refresh with Ctrl+F5 after an update.

The supplied build uses root-relative asset URLs such as `/images/logo.png`. It is prepared for a domain/subdomain root. Uploading it under `/construction/` on the existing website needs code and asset-path changes plus a rebuild; do not simply move this build into a subfolder.

Upload generated output only. Do not upload source code, node_modules, package files or `.next` into public_html. For an update, retain a backup of the previous complete deployment to allow rollback.

## 5. What the contact buttons do

- Email buttons open the visitor's email application with a subject.
- Telephone buttons request a call through the visitor's device.
- WhatsApp opens a conversation addressed to EDUCORE.
- The PDF downloads directly from the site.

There is no database, contact-form submission service, automatic email delivery or stored enquiry history. Clicking an email/WhatsApp link does not mean a message has been sent; the visitor still sends it in that application. No API keys or environment variables are needed for this version.

## 6. Troubleshooting

- `ENOENT` or package.json missing: navigate into `source` before running npm.
- `node` not recognised: install Node.js and reopen the terminal.
- PowerShell blocks npm.ps1: use the `npm.cmd` commands shown above.
- Port 3000 is busy: use the alternate URL printed by Next.js.
- Old content after editing: rebuild and upload the new `source/out` contents, then hard-refresh.
- Missing styling or photos after upload: verify `_next` and `images` are beside index.html, and that you used a domain/subdomain root. Preserve filename case.
- PDF missing: check `educore-company-profile-2026.pdf` is beside index.html.
- Email button appears unresponsive: configure an email app, or copy the displayed address into your webmail.

## Verification and next steps

The downloadable source passed a clean npm ci installation, Next.js production build and TypeScript checks. The handover uses the same page, styling and assets with a smaller, portable dependency manifest. The ready-to-upload folder is the output of that verified build. Browser interaction testing on your device is still needed. Review company particulars and documentation claims before a public launch. A real-project portfolio can be added once verified photos and project descriptions are supplied.
