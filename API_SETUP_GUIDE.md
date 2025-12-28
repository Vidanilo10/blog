# API Integration Guide

This guide provides step-by-step instructions for integrating Spotify and YouTube APIs into your blog.

## Spotify Web API Integration

### Step 1: Register Your Application

1. Go to [Spotify for Developers](https://developer.spotify.com/dashboard)
2. Log in with your Spotify account
3. Click "Create an App"
4. Fill in the app details:
   - App name: "My Blog"
   - App description: "Personal blog with music integration"
   - Redirect URIs: `http://localhost:4200` (for development)
5. Accept the terms and click "Create"

### Step 2: Get Your Credentials

1. In your app dashboard, you'll see:
   - **Client ID**: Your app's public identifier
   - **Client Secret**: Your app's private key (keep this secure!)

### Step 3: Embed Spotify Playlists

#### Option A: Simple Embed (Current Implementation)

1. Open any Spotify playlist in your browser or app
2. Click the "..." (more options) button
3. Select "Share" → "Copy Playlist Link"
4. Extract the playlist ID from the URL:
   - URL format: `https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M`
   - Playlist ID: `37i9dQZF1DXcBWIGoYBM5M`
5. Update in `src/app/components/music/music.component.ts`:
   ```typescript
   const spotifyUrl = 'https://open.spotify.com/embed/playlist/YOUR_PLAYLIST_ID';
   ```

#### Option B: Advanced API Integration (User Authentication)

For features like controlling playback, accessing user playlists, etc.:

1. Install Spotify Web API library:
   ```bash
   npm install spotify-web-api-js
   ```

2. Create a service: `src/app/services/spotify.service.ts`:
   ```typescript
   import { Injectable } from '@angular/core';
   import SpotifyWebApi from 'spotify-web-api-js';

   @Injectable({
     providedIn: 'root'
   })
   export class SpotifyService {
     private spotify = new SpotifyWebApi();

     constructor() {}

     setAccessToken(token: string): void {
       this.spotify.setAccessToken(token);
     }

     getUserPlaylists(): Promise<any> {
       return this.spotify.getUserPlaylists();
     }
   }
   ```

3. Implement OAuth 2.0 flow (see [Spotify Auth Guide](https://developer.spotify.com/documentation/web-api/tutorials/code-flow))

### Copyright Compliance

- **Embedded playlists**: ✅ Allowed (using official Spotify embed)
- **Playing full tracks**: ✅ Allowed (through official player)
- **Downloading**: ❌ Not allowed
- **Attribution**: Always credit Spotify

---

## YouTube Data API Integration

### Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Click "Select a project" → "New Project"
3. Enter project name: "My Blog"
4. Click "Create"

### Step 2: Enable YouTube Data API

1. In the Cloud Console, go to "APIs & Services" → "Library"
2. Search for "YouTube Data API v3"
3. Click on it and click "Enable"

### Step 3: Create Credentials

#### Option A: API Key (Simple, for public data)

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "API Key"
3. Copy your API key
4. (Optional) Restrict the key:
   - Application restrictions: HTTP referrers
   - API restrictions: YouTube Data API v3

#### Option B: OAuth 2.0 (For user data)

1. Click "Create Credentials" → "OAuth client ID"
2. Configure consent screen if prompted
3. Application type: "Web application"
4. Add authorized redirect URIs
5. Copy Client ID and Client Secret

### Step 4: Implement in Your App

#### Simple Embed (Current Implementation)

Update video IDs in `src/app/components/music/music.component.ts`:

```typescript
youtubeVideos = [
  { id: 'YOUR_VIDEO_ID', title: 'Your Video Title' },
  { id: 'ANOTHER_VIDEO_ID', title: 'Another Video' }
];
```

To get video ID:
- Video URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Video ID: `dQw4w9WgXcQ`

#### Advanced API Integration

1. Install Angular HTTP Client (already included)

2. Create YouTube service: `src/app/services/youtube.service.ts`:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiKey = 'YOUR_API_KEY';
  private apiUrl = 'https://www.googleapis.com/youtube/v3';

  constructor(private http: HttpClient) {}

  searchVideos(query: string, maxResults: number = 10): Observable<any> {
    const url = `${this.apiUrl}/search?part=snippet&q=${query}&maxResults=${maxResults}&key=${this.apiKey}`;
    return this.http.get(url);
  }

  getPlaylistItems(playlistId: string): Observable<any> {
    const url = `${this.apiUrl}/playlistItems?part=snippet&playlistId=${playlistId}&key=${this.apiKey}`;
    return this.http.get(url);
  }

  getVideoDetails(videoId: string): Observable<any> {
    const url = `${this.apiUrl}/videos?part=snippet,statistics&id=${videoId}&key=${this.apiKey}`;
    return this.http.get(url);
  }
}
```

3. Use in component:

```typescript
import { YoutubeService } from '../../services/youtube.service';

export class MusicComponent implements OnInit {
  videos: any[] = [];

  constructor(private youtubeService: YoutubeService) {}

  ngOnInit(): void {
    this.youtubeService.searchVideos('your search term')
      .subscribe(data => {
        this.videos = data.items;
      });
  }
}
```

### YouTube API Quota

- Free quota: 10,000 units/day
- Reading video info: 1 unit
- Searching: 100 units
- Monitor usage in Google Cloud Console

### Copyright Compliance

- **Embedded videos**: ✅ Allowed (using official YouTube embed)
- **Attribution**: Required for API usage
- **Terms of Service**: Must display YouTube logo and link
- **Content**: Only embed videos you have rights to or public videos

---

## Security Best Practices

### Protecting API Keys

1. **Never commit API keys to Git**:
   - Add `.env` to `.gitignore`
   - Use environment variables

2. **Create environment file**: `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  spotifyClientId: 'YOUR_CLIENT_ID',
  youtubeApiKey: 'YOUR_API_KEY'
};
```

3. **For production**: `src/environments/environment.prod.ts`:

```typescript
export const environment = {
  production: true,
  spotifyClientId: 'YOUR_PROD_CLIENT_ID',
  youtubeApiKey: 'YOUR_PROD_API_KEY'
};
```

4. **Use in services**:

```typescript
import { environment } from '../../environments/environment';

private apiKey = environment.youtubeApiKey;
```

### GitHub Secrets (for CI/CD)

1. Go to your GitHub repository
2. Settings → Secrets and variables → Actions
3. Add secrets:
   - `SPOTIFY_CLIENT_ID`
   - `YOUTUBE_API_KEY`
4. Reference in GitHub Actions workflow

---

## Testing Your Integration

### Spotify

1. Open your app at `http://localhost:4200/music`
2. Check if the Spotify player loads
3. Try playing a song

### YouTube

1. Navigate to Music page
2. Verify videos are displayed
3. Click play to test embedding

---

## Troubleshooting

### Spotify Issues

**Problem**: Player doesn't load
- **Solution**: Check playlist is public
- **Solution**: Verify playlist ID is correct
- **Solution**: Check browser console for errors

**Problem**: "Premium required" message
- **Solution**: Some features require Spotify Premium

### YouTube Issues

**Problem**: "Video unavailable"
- **Solution**: Video might be region-restricted
- **Solution**: Video might be private or deleted
- **Solution**: Check embed permissions

**Problem**: API quota exceeded
- **Solution**: Reduce API calls
- **Solution**: Implement caching
- **Solution**: Request quota increase from Google

**Problem**: CORS errors
- **Solution**: Use YouTube's iframe embed instead of direct API calls for playback
- **Solution**: Configure API key restrictions properly

---

## Additional Resources

### Spotify
- [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api)
- [Spotify Embed Generator](https://developer.spotify.com/documentation/embeds)
- [Authorization Guide](https://developer.spotify.com/documentation/web-api/tutorials/getting-started)

### YouTube
- [YouTube Data API Documentation](https://developers.google.com/youtube/v3)
- [YouTube Player API](https://developers.google.com/youtube/iframe_api_reference)
- [API Key Best Practices](https://cloud.google.com/docs/authentication/api-keys)

### Angular
- [HTTP Client Guide](https://angular.dev/guide/http)
- [Environment Configuration](https://angular.dev/guide/build)

---

## Rate Limits and Costs

### Spotify
- **Rate Limit**: ~180 requests per minute
- **Cost**: Free for most use cases
- **Commercial Use**: Contact Spotify for licensing

### YouTube
- **Daily Quota**: 10,000 units (free tier)
- **Cost**: Free up to quota, then $0.20 per 10,000 units
- **Request Increase**: Available through Google Cloud Console

---

## Legal Considerations

1. **Terms of Service**: Read and comply with both Spotify and YouTube ToS
2. **Attribution**: Always provide proper attribution
3. **User Data**: Follow GDPR/privacy laws if collecting user data
4. **Commercial Use**: May require different licenses

---

## Next Steps

1. ✅ Set up Spotify Developer account
2. ✅ Create Google Cloud project
3. ✅ Get API credentials
4. ✅ Update your components with real data
5. ✅ Test thoroughly
6. ✅ Deploy to production

Need help? Check the official documentation or open an issue on GitHub!
