This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Development Mode

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Static Export for GitHub Pages

To test the static site locally before deploying to GitHub Pages:

```bash
# Build and export to the `out/` directory
npm run build

# Serve the exported site locally
cd out
python3 -m http.server 3000
# Then open http://localhost:3000
```

Alternatively, use `npx serve out` if you have it installed, or configure `basePath` in `next.config.js` for project-level GitHub Pages deployments.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`. Note that API routes are not available in static exports.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy on GitHub Pages

For a static GitHub Pages deployment:

1. Set `basePath` in `next.config.js` if deploying to a project repository:
   ```javascript
   const nextConfig = {
     output: 'export',
     images: { unoptimized: true },
     basePath: '/<repository-name>', // Only for project pages
   }
   ```

2. Build and export:
   ```bash
   npm run build
   ```

3. Push the `out/` directory to your `gh-pages` branch or configure GitHub Actions to automate deployment.
