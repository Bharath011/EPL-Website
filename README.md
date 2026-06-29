# EPL | Energy and Propulsion Lab

This is the source for the **EPL website** built with Vite, React, and TypeScript. The site has been updated for:

- `Home`
- `Research Areas`
- `Team`
- `Publications`
- `Courses`
- `Gallery`
- `Join us`

## Features

- Responsive React + Vite website
- Team page powered by document-based member data
- Research and publications pages with professor-specific content
- Course listing for `AE5050`
- Gallery page with image lightbox support
- Clean navigation and accessible page layout
- Static deployment-ready build

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
EPL_Lab/
  public/
    favicon.svg
    epl-logo.svg
    prof-gnanaprakash.jpeg
    team-rId*.jpeg
    Home page.docx
    Members website.docx
  src/
    components/
      Layout.tsx
    data/
      content.ts
    pages/
      HomePage.tsx
      ResearchPage.tsx
      PublicationsPage.tsx
      CoursesPage.tsx
      TeamPage.tsx
      GalleryPage.tsx
      JoinUsPage.tsx
    App.tsx
    main.tsx
    styles.css
  package.json
  tsconfig.json
  tsconfig.node.json
  vite.config.ts
  README.md
```

## Content Updates

Most site content is driven from `src/data/content.ts`. Update the following there:

- research area summaries
- publication records
- course details
- team member names, groups, emails, and images
- gallery captions and image URLs

## Deployment

The project builds to `dist/` using:

```bash
npm run build
```

Deploy `dist/` to any static host such as Vercel, Netlify, GitHub Pages, or Cloudflare Pages.

### GitHub Pages

If deploying to GitHub Pages, use the following settings:

- Build command: `npm run build`
- Publish directory: `dist`

### Vercel / Netlify

Use the same build command and publish directory:

- Build command: `npm run build`
- Output directory: `dist`

## Notes

- `node_modules` and `dist` are ignored by git.
- The repository is pushed to `https://github.com/Bharath011/EPL-Website.git`.
