# 💅 קורס מניקור בסיסי — Landing Page

## About This Project
A landing page for a **private 1:1 manicure course**.

- One-on-one private training, at the student's own pace
- Currently open for registration: **מניקור בסיסי** (basic manicure)
- Other courses (gel polish, nail art, extensions) are shown as "coming soon"
- Positioned as premium — not a mass-market school

## Goal
- Explain the course offering clearly
- Collect leads via WhatsApp inquiries
- Build trust and premium positioning

## Tech Stack
- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

## Live Site
https://mendidou.github.io/modern-course-launch/

## Local Development
```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # production build into dist/
```

## Deployment
Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages. The Vite `base` is `/modern-course-launch/`, and the build
copies `index.html` to `404.html` so client-side routes (e.g. `/course/1`) work on Pages.

## Content
Course content lives in `src/data/courses.ts` (titles, descriptions, modules, images).
Course photos are in `src/assets/`.
