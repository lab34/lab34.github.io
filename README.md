# Lab34 - Blog & Resume Site

A modern blog and resume/portfolio site built with Vite and React, deployed to GitHub Pages.

🌐 **Live Site**: [https://lab34.github.io/](https://lab34.github.io/)

## Features

- ⚡ Fast development with Vite
- ⚛️ React 18 with functional components
- 🎨 Clean, responsive design
- 🧭 Client-side routing with React Router
- 🚀 Automatic deployment to GitHub Pages via GitHub Actions
- 📱 Mobile-friendly navigation

## Project Structure

```
lab34.github.io/
├── src/
│   ├── components/      # Reusable components (Navigation, etc.)
│   ├── pages/          # Page components (Home, Blog, Resume)
│   ├── App.jsx         # Main app with routing
│   ├── App.css         # App-specific styles
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
├── public/             # Static assets
├── .github/workflows/  # GitHub Actions deployment
└── dist/              # Build output (generated)
```

## Development

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/lab34/lab34.github.io.git
cd lab34.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

### Available Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (output to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### GitHub Pages Setup

1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to `main` branch to trigger deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
- Build the Vite project
- Add `.nojekyll` file for proper routing
- Deploy to GitHub Pages

## Content Management

### Adding Blog Posts

Currently, blog posts are managed manually in `src/pages/Blog.jsx`. To add a new post:

1. Edit `src/pages/Blog.jsx`
2. Add your post content in the `blog-posts` section
3. Commit and push to deploy

**Future enhancement**: Consider integrating markdown files or a CMS.

### Updating Resume

To update your resume/CV:

1. Edit `src/pages/Resume.jsx`
2. Update sections (About, Experience, Skills, etc.)
3. Commit and push to deploy

### Customizing Navigation

Edit `src/components/Navigation.jsx` to:
- Change the brand name
- Add/remove menu items
- Modify navigation structure

## Styling

- Global styles: `src/index.css`
- App-specific styles: `src/App.css`
- Component styles: Inline or create component-specific CSS files

## Technology Stack

- **Build Tool**: Vite 7.3.1
- **Framework**: React 18
- **Routing**: React Router v6
- **Deployment**: GitHub Pages via GitHub Actions
- **Linting**: ESLint with React configuration

## License

MIT

## Support

For questions or issues, please open an issue on GitHub.

