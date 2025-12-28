# Quick Start Guide

Get your blog up and running in 5 minutes!

## 🚀 Quick Setup

### 1. Navigate to the project
```bash
cd c:\Users\Victor\projects\blog\my-blog
```

### 2. Install dependencies (if not already done)
```bash
npm install
```

### 3. Start the development server
```bash
npm start
```

### 4. Open your browser
Go to: **http://localhost:4200**

That's it! Your blog is now running locally! 🎉

---

## 📝 What You Get

Your blog includes:

- **Home Page** (`/`) - Welcome page with navigation to all sections
- **Movies Page** (`/movies`) - 5 sample movies with images and descriptions
- **Music Page** (`/music`) - Spotify and YouTube embeds
- **Portfolio Page** (`/portfolio`) - Auto-redirects to your GitHub portfolio

---

## 🎨 Customization Checklist

### Immediate Changes

- [ ] Update movie list in `src/app/services/movie.service.ts`
- [ ] Replace Spotify playlist ID in `src/app/components/music/music.component.ts`
- [ ] Update YouTube video IDs in `src/app/components/music/music.component.ts`
- [ ] Verify portfolio URL in `src/app/components/portfolio/portfolio.component.ts`

### Optional Changes

- [ ] Change site title in `src/app/app.component.ts`
- [ ] Modify colors (currently #F0DCC5) in CSS files
- [ ] Add your own images to `src/assets/`
- [ ] Update README.md with your information

---

## 🔧 Common Commands

### Development
```bash
npm start              # Start dev server
npm test               # Run tests
npm run lint           # Check code quality
```

### Production Build
```bash
npm run build                        # Build for production
npm run build -- --base-href=/blog/  # Build for GitHub Pages
```

---

## 📁 Key Files to Know

| File | Purpose |
|------|---------|
| `src/app/app.routes.ts` | Define page routes |
| `src/app/app.component.*` | Main app shell (nav, footer) |
| `src/styles.css` | Global styles and theme |
| `src/app/services/movie.service.ts` | Movie data |
| `angular.json` | Angular configuration |

---

## 🌐 Deploy to GitHub Pages

### Quick Deploy

1. **Initialize Git** (if not done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub repo** named `blog` on github.com

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/blog.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to repo Settings → Pages
   - Source: GitHub Actions
   - Wait for deployment to complete

5. **Visit your live site**:
   ```
   https://YOUR_USERNAME.github.io/blog/
   ```

---

## 🎯 Next Steps

1. **Customize Content**
   - Add your favorite movies
   - Connect your Spotify playlists
   - Update YouTube videos

2. **Set Up APIs** (Optional but Recommended)
   - Read `API_SETUP_GUIDE.md` for detailed instructions
   - Get Spotify Developer credentials
   - Get YouTube Data API key

3. **Deploy**
   - Follow `DEPLOYMENT.md` for detailed deployment instructions
   - Choose between GitHub Pages or AWS S3

4. **Maintain**
   - Regularly update content
   - Keep dependencies up to date (`npm update`)
   - Monitor GitHub Actions for deployment status

---

## ❓ Need Help?

- **Build errors?** Run `npm install` again
- **Routing issues?** Check `app.routes.ts`
- **Styling problems?** Inspect with browser DevTools
- **Deployment issues?** See `DEPLOYMENT.md`

---

## 📚 Documentation

- `README.md` - Project overview and features
- `DEPLOYMENT.md` - Detailed deployment guide
- `API_SETUP_GUIDE.md` - Spotify and YouTube API setup

---

## ✨ Features Included

✅ Responsive design (mobile, tablet, desktop)
✅ TypeScript for type safety
✅ Angular 17 with standalone components
✅ Routing with lazy loading ready
✅ Custom color theme (#F0DCC5)
✅ GitHub Actions workflow
✅ Professional navigation and footer
✅ SEO-friendly structure

---

## 🎨 Color Theme

Main color: **#F0DCC5** (warm beige)
- Navigation: Black background with #F0DCC5 accents
- Text: Black for readability
- Footer: White background with black text
- Accent: #F0DCC5 for highlights

To change colors, search for `#F0DCC5` in all CSS files and replace!

---

**Happy blogging! 🚀**
