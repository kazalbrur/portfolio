
# ⭐ Next.js Portfolio Website with Medium Blog Integration ⭐

## Tech Stack & Services 🛠️

* **Next.js** — React framework for fast, SEO-friendly websites
* **React** — UI components
* **Tailwind CSS / Styled Components** — Styling (adjust as per your stack)
* **Vercel / Netlify** — Deployment platform
* **Medium API / RSS Feed** — Blog integration for fetching latest posts
* **SEO Tools:** Next.js Head metadata, dynamic sitemap, robots.txt

---

## Features 🚀

* **Portfolio Sections:** Home, About, Skills, Projects, Experience, Contact
* **Medium Blog Integration:**

  * Fetch and display latest Medium blog posts dynamically using Medium’s RSS feed or API
  * Blog cards with title, snippet, publish date, and link to full post on Medium
* **SEO Optimized:**

  * Metadata (OpenGraph, Twitter Cards)
  * Dynamic sitemap including portfolio pages
  * Robots.txt with verification tags for Google, Bing, Yandex
* **Responsive & Accessible:** Mobile-friendly and accessible UI

---

## Setup & Deployment Guide 🚀

1. **Fork/Clone this repo**
2. Run:

   ```bash
   npm install
   npm run dev
   ```
3. Modify your personal info and portfolio content in the `/app` or `/pages` folders
4. Configure Medium blog integration:

   * Add your Medium username or RSS feed URL in `.env` or config file
   * Example:

     ```env
     MEDIUM_RSS=https://medium.com/feed/@yourusername
     ```
5. Place your images in `/public/images`
6. Build and deploy using Vercel or any other Next.js-compatible platform:

   ```bash
   npm run build
   npm run start
   ```
7. For production deployment, follow [Next.js official deployment docs](https://nextjs.org/docs/deployment)

---

## Medium Blog Integration Details 🔍

* Uses Medium’s RSS feed to fetch the latest blog posts (works without authentication)
* Blog posts rendered as cards with title, date, excerpt, and clickable link to Medium
* Regularly updates on page load or at a scheduled interval if you implement ISR (Incremental Static Regeneration)

---

## SEO & Verification Tools 🔧

* Metadata includes Google, Bing, Yandex verification tags
* Sitemap generated dynamically to include portfolio pages and can be extended to blogs
* Robots.txt configured for SEO best practices

---

## Sections Overview 📚

* 🏠 Home
* 🙋‍♂️ About
* 🛠️ Skills
* 💼 Projects
* 🔍 Experience
* 📝 Blogs (Medium integrated)
* 📬 Contact

---

## Contributing 💡

1. Fork or clone the repo
2. Add or update features and portfolio content
3. Open a pull request for review

---

If you want, I can also help you with:

* Sample code to fetch Medium RSS feed in Next.js
* SEO metadata snippets with Next.js Head
* Example dynamic sitemap config for portfolio + blogs

Just say the word!
