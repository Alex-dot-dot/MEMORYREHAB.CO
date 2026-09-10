# 🚀 Vercel Launch & Custom Domain Deployment Guide
**Project**: Memory Rehab Lab — Luxury Clinical Barrier Skincare

Your storefront is 100% prepared for instant Vercel deployment with clean URLs, security headers, dynamic theme syncing, and custom domain hosting.

---

## ⚡ Step 1: Deploy to Vercel in Under 60 Seconds

### Method A: Vercel Web Dashboard (Recommended)
1. Upload / Push this project folder to your GitHub or GitLab repository.
2. Open your [Vercel Dashboard](https://vercel.com/dashboard).
3. Click **Add New...** and choose **Project**.
4. Import your repository.
5. **Framework Preset**: Select **Other** (Vercel automatically detects `vercel.json` and static files).
6. **Root Directory**: `./` (leave default).
7. Click **Deploy**. Your site will be live within seconds on a free `*.vercel.app` URL!

### Method B: Vercel CLI
Run the following commands in this directory:
```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 🌐 Step 2: Connect Your Custom Domain

1. In your **Vercel Project Dashboard**, navigate to **Settings** → **Domains**.
2. Enter your custom domain name (for example, `memoryrehab.com` or `yourdomain.com`).
3. Click **Add**.
4. Vercel will recommend adding both the root domain and `www` with automatic redirection (e.g. redirect `yourdomain.com` to `www.yourdomain.com`). Select this option.

---

## 🛠 Step 3: Configure DNS Records at Your Registrar

Log in to your domain provider (Namecheap, GoDaddy, Cloudflare, Google Domains, Hostinger, Porkbun, etc.) and add these two DNS records:

| Record Type | Host / Name | Target / Destination | TTL |
| :--- | :--- | :--- | :--- |
| **A Record** | `@` (root) | `76.76.21.21` | Auto / 1 Hour |
| **CNAME** | `www` | `cname.vercel-dns.com` | Auto / 1 Hour |

> **Note**: DNS propagation usually takes anywhere from 2 to 30 minutes. Once Vercel detects the records, it will automatically issue a **free Let's Encrypt SSL certificate (HTTPS)**.

---

## 🔐 Step 4: Authorize Your Domain in Firebase (Essential for Google Sign-In)

To allow Google Sign-In on your live domain:
1. Go to the [Firebase Console](https://console.firebase.google.com).
2. Open your project: **`memory-rehab`**.
3. In the left navigation, click **Build** → **Authentication**.
4. Click the **Settings** tab at the top.
5. Scroll down to **Authorized domains**.
6. Click **Add domain** and enter your custom domain (e.g. `yourdomain.com` and `www.yourdomain.com`), as well as your Vercel URL (`*.vercel.app`).
7. Click **Done**.

---

## 💎 What Has Been Pre-Configured in `vercel.json`

- **Clean URLs**: Access `/admin`, `/product`, and `/auth` directly without typing `.html`.
- **Global Edge Caching**: High-performance 1-year caching for product photos and assets; instant zero-cache on HTML so admin pricing and theme changes reflect immediately.
- **Security Headers**: Standard defense against clickjacking and MIME-type sniffing (`X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`).
- **Live Cloud Sync**: Firebase Firestore real-time listeners continue working 24/7 on your custom domain.