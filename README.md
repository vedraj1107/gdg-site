This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# GDG RBU Website

Responsive website for Google Developer Groups, Ramdeobaba University, built from the provided Figma design.

**Live:** https://your-app.vercel.app

## Features
- Pixel-accurate Figma conversion, responsive (mobile, tablet, desktop)
- Dark / Light mode
- Smooth animations (Framer Motion)
- AI chatbot powered by Gemini
- Semantic HTML, optimized images (`next/image`)

## Tech Stack
Next.js, React, TypeScript, Tailwind CSS, Framer Motion, next-themes, Gemini API

## Setup
```bash
git clone https://github.com/<username>/gdg-site.git
cd gdg-site
npm install
```
Create `.env.local`:
```
GEMINI_API_KEY=your_key
```
```bash
npm run dev
```

## Structure
```
app/         pages, layout, API route
components/  Navbar, Hero, Events, Team, Faq, Footer, ChatWidget, ThemeToggle
public/      images
```