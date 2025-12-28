# My Blog

A modern, responsive blog built with Angular and TypeScript featuring movies, music, and portfolio sections.

## Features

- **🎬 Movies Page**: Curated movie collection with descriptions, ratings, and images
- **🎵 Music Page**: Integrated Spotify playlists and YouTube videos
- **💼 Portfolio Page**: Direct link to professional portfolio
- **🎨 Custom Theme**: Beautiful design with #F0DCC5 color palette
- **📱 Responsive**: Works perfectly on all devices
- **⚡ Fast**: Built with Angular's latest features

## Tech Stack

- **Framework**: Angular 17
- **Language**: TypeScript
- **Styling**: CSS3
- **Deployment**: GitHub Pages (or AWS S3)
- **APIs**: Spotify Web API, YouTube Data API

## Project Structure

```
blog/
├── my-blog/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── home/
│   │   │   │   ├── movies/
│   │   │   │   ├── music/
│   │   │   │   └── portfolio/
│   │   │   ├── models/
│   │   │   ├── services/
│   │   │   ├── app.component.*
│   │   │   └── app.routes.ts
│   │   ├── assets/
│   │   ├── styles.css
│   │   └── index.html
│   ├── angular.json
│   └── package.json
├── .github/
│   └── workflows/
│       └── deploy.yml
├── DEPLOYMENT.md
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/blog.git
   cd blog/my-blog
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200`

## Development

### Adding Movies

Edit the movie list in `src/app/services/movie.service.ts`:

```typescript
{
  id: 6,
  title: 'Your Movie Title',
  year: 2024,
  director: 'Director Name',
  description: 'Movie description...',
  imageUrl: 'https://your-image-url.com',
  rating: 8.5
}
```

### Customizing Music

Update Spotify playlist and YouTube videos in `src/app/components/music/music.component.ts`:

```typescript
spotifyPlaylistUrl = 'YOUR_SPOTIFY_PLAYLIST_ID';
youtubeVideos = [
  { id: 'VIDEO_ID', title: 'Video Title' }
];
```

### Changing Theme Colors

Modify the color scheme in:
- `src/styles.css` (global styles)
- `src/app/app.component.css` (navigation and footer)
- Component-specific CSS files

## Building for Production

```bash
cd my-blog
npm run build -- --base-href=/blog/
```

Build artifacts will be in `dist/my-blog/browser/`.

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to GitHub Pages

1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Select "GitHub Actions" as source
4. GitHub Action will automatically build and deploy

## API Integration

### Spotify Web API

1. Register at [Spotify for Developers](https://developer.spotify.com)
2. Create an app and get credentials
3. Update the playlist URL in the Music component

### YouTube Data API

1. Create project in [Google Cloud Console](https://console.cloud.google.com)
2. Enable YouTube Data API v3
3. Generate API key
4. Update video IDs in the Music component

## Screenshots

*Add screenshots of your blog here*

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- Portfolio: [https://vidanilo10.github.io/portfolio-dark-blue/](https://vidanilo10.github.io/portfolio-dark-blue/)
- GitHub: [@vidanilo10](https://github.com/vidanilo10)

## Acknowledgments

- Movie images from [Unsplash](https://unsplash.com)
- Icons and fonts from various open-source projects
- Built with [Angular](https://angular.dev)
