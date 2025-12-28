# Deployment Guide for GitHub Pages

This guide will help you deploy your Angular blog to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your machine
3. Your Angular project built and ready

## Deployment Steps

### Option 1: Deploy via GitHub Actions (Recommended)

1. **Initialize Git Repository**
   ```bash
   cd c:\Users\Victor\projects\blog
   git init
   git add .
   git commit -m "Initial commit - Angular blog"
   ```

2. **Create GitHub Repository**
   - Go to GitHub and create a new repository named `blog`
   - Don't initialize with README, .gitignore, or license

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/blog.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository Settings
   - Navigate to Pages (under Code and automation)
   - Source: Select "GitHub Actions"

5. **The GitHub Action will automatically deploy your site!**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/blog/`

### Option 2: Deploy from AWS S3 to GitHub Pages

If you want to deploy from AWS S3:

1. **Build the Angular App**
   ```bash
   cd my-blog
   npm run build -- --base-href=/blog/
   ```

2. **Upload to S3**
   ```bash
   aws s3 sync dist/my-blog/browser/ s3://your-bucket-name/ --delete
   ```

3. **Configure S3 Static Website Hosting**
   - Enable static website hosting on your S3 bucket
   - Set index document to `index.html`
   - Set error document to `index.html` (for Angular routing)

4. **Use CloudFront or Transfer to GitHub Pages**
   - You can serve from S3 via CloudFront, or
   - Download from S3 and push to GitHub Pages

## Local Development

To run the blog locally:

```bash
cd my-blog
npm start
```

Visit `http://localhost:4200`

## Build for Production

```bash
cd my-blog
npm run build
```

The build artifacts will be in `dist/my-blog/browser/`

## API Configuration

### Spotify API Setup

1. Go to [Spotify for Developers](https://developer.spotify.com)
2. Create an app
3. Get your Client ID and Client Secret
4. Update the playlist URL in `music.component.ts`

### YouTube API Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable YouTube Data API v3
4. Create credentials (API Key)
5. Update video IDs in `music.component.ts`

## Customization

### Update Movie List
Edit: `my-blog/src/app/services/movie.service.ts`

### Change Colors
The theme color `#F0DCC5` can be modified in:
- `my-blog/src/styles.css`
- `my-blog/src/app/app.component.css`
- Individual component CSS files

### Update Portfolio Link
Edit: `my-blog/src/app/components/portfolio/portfolio.component.ts`

## Troubleshooting

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Check Node.js version compatibility

### Routing Issues on GitHub Pages
- Ensure `--base-href` is set correctly during build
- The app uses `HashLocationStrategy` for routing compatibility

### Images Not Loading
- Use relative paths or CDN URLs
- For local images, place them in `my-blog/src/assets/`

## Support

For issues or questions:
- Check Angular documentation: https://angular.dev
- GitHub Pages docs: https://docs.github.com/pages
