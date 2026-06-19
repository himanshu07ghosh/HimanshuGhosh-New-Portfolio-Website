# Himanshu Ghosh — Portfolio

A premium, dark, developer-themed portfolio built with **Next.js (App Router)**,
**Tailwind CSS**, and **Framer Motion**. Includes a custom cursor, scroll
animations, an animated timeline, 3D-tilt project cards, and a working
contact form.

---

## 1. Folder structure

```
portfolio/
├── app/
│   ├── layout.js          # Fonts, SEO metadata, root HTML shell
│   ├── page.js            # Composes all sections
│   └── globals.css        # Design tokens, glass/cursor/grid utilities
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── About.js
│   ├── Experience.js
│   ├── Projects.js
│   ├── ProjectCard.js
│   ├── Skills.js
│   ├── Resume.js
│   ├── Contact.js
│   ├── SocialIcons.js
│   ├── Footer.js
│   ├── CustomCursor.js
│   ├── ScrollProgress.js
│   ├── BackToTop.js
│   └── Preloader.js
├── public/
│   ├── images/
│   │   ├── himanshu-portrait.jpg     # Hero section
│   │   └── himanshu-landscape.jpg    # About / Contact section
│   └── resume/
│       └── Himanshu_Ghosh_Resume.pdf
├── .env.example
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── jsconfig.json
└── package.json
```

---

## 2. Run it locally (VS Code)

```bash
# 1. Unzip and open the folder in VS Code
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open **http://localhost:3000** — you should see the site with hot reload.

> Node.js 18.18+ is required (Next.js 14). Check with `node -v`.

---

## 3. Contact form setup (optional but recommended)

The form works out of the box: if no provider is configured, submitting it
opens the visitor's email client with the message pre-filled. To send
messages automatically (no email client needed) and log them to a Google
Sheet, set the following in a new `.env.local` file (copy `.env.example`):

### A. EmailJS — sends the message to your inbox
1. Create a free account at https://www.emailjs.com
2. Add an Email Service (e.g. Gmail) and an Email Template with variables
   `from_name`, `from_email`, `phone`, `message`.
3. Copy your **Public Key**, **Service ID**, and **Template ID** into
   `.env.local`:
   ```
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   ```

### B. Google Sheets logging (via Google Apps Script)
1. Create a new Google Sheet with columns: `name`, `email`, `phone`,
   `message`, `submittedAt`.
2. In the sheet, go to **Extensions → Apps Script** and paste:
   ```javascript
   function doPost(e) {
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     const data = JSON.parse(e.postData.contents);
     sheet.appendRow([data.name, data.email, data.phone, data.message, data.submittedAt]);
     return ContentService.createTextOutput(JSON.stringify({ status: "ok" }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```
3. Click **Deploy → New deployment → Web app**. Set "Who has access" to
   **Anyone**, then deploy and copy the generated Web App URL.
4. Paste it into `.env.local`:
   ```
   NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/XXXX/exec
   ```

Restart `npm run dev` after editing `.env.local`.

---

## 4. Update project links

`components/Projects.js` currently points the **GitHub** and **Live Demo**
buttons at `https://github.com/himanshu07ghosh`. Once your individual repos
are live, update each project's `github` and `demo` fields with the real
URLs.

---

## 5. Deploy to Vercel (fastest path)

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel login
vercel          # first deploy (preview)
vercel --prod   # production deploy
```

### Option B — GitHub + Vercel dashboard
1. Push this folder to a new GitHub repository.
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.
4. If you set up the contact form, add the same variables from
   `.env.local` under **Project Settings → Environment Variables**,
   then redeploy.

Your site will be live at `your-project.vercel.app` (you can attach a
custom domain from the same dashboard).

---

## 6. Notes

- Images are served from `public/images` and are already wired into the
  Hero (portrait) and About/Contact (landscape) sections — no edits needed.
- The resume PDF lives at `public/resume/Himanshu_Ghosh_Resume.pdf` and is
  linked from the Hero and Resume sections' "Download Resume" buttons.
- Reduced-motion preference is respected (`prefers-reduced-motion`), and the
  custom cursor automatically disables itself on touch devices.
