# GDG RBU Website

Responsive website for Google Developer Groups, Ramdeobaba University, built from the provided Figma design.

**Live:** https://gdg-site-ochre.vercel.app

## Features
- Figma design converted to a responsive site (mobile, tablet, desktop)
- Dark / Light mode
- Smooth animations (Framer Motion)
- AI chatbot powered by Gemini
- Semantic HTML, optimized images (`next/image`)

## Tech Stack
Next.js, React, TypeScript, Tailwind CSS, Framer Motion, next-themes, Gemini API

## Setup
```bash
git clone https://github.com/vedraj1107/gdg-site.git
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
app/         pages, layout, chat API route
components/  Navbar, Hero, Events, Team, Faq, Footer, ChatWidget, ThemeToggle, Logo
public/      images
```
