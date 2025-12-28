import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  channelTitle: string;
  publishedAt: string;
}

export interface YouTubePlaylist {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  itemCount: number;
}

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private readonly API_URL = 'https://www.googleapis.com/youtube/v3';
  private readonly AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
  private accessToken: string | null = null;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.accessToken = sessionStorage.getItem('youtube_access_token');
    }
  }

  /**
   * Generate OAuth URL for YouTube authentication
   */
  getAuthUrl(clientId: string, redirectUri: string): string {
    const scopes = [
      'https://www.googleapis.com/auth/youtube.readonly'
    ].join(' ');

    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: 'token',
      scope: scopes,
      access_type: 'online'
    });

    return `${this.AUTH_URL}?${params.toString()}`;
  }

  /**
   * Set access token from OAuth callback
   */
  setAccessToken(token: string): void {
    this.accessToken = token;
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem('youtube_access_token', token);
    }
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return this.accessToken !== null;
  }

  /**
   * Logout and clear token
   */
  logout(): void {
    this.accessToken = null;
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem('youtube_access_token');
    }
  }

  /**
   * Get user's liked videos (requires authentication)
   */
  getLikedVideos(maxResults: number = 12): Observable<YouTubeVideo[]> {
    const url = `${this.API_URL}/videos?part=snippet&myRating=like&maxResults=${maxResults}&access_token=${this.accessToken}`;
    
    return this.http.get<any>(url).pipe(
      map(response => {
        return response.items.map((item: any) => ({
          id: item.id,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default.url,
          channelTitle: item.snippet.channelTitle,
          publishedAt: item.snippet.publishedAt
        }));
      })
    );
  }

  /**
   * Search for videos by keyword
   */
  searchVideos(query: string, maxResults: number = 10, apiKey: string): Observable<YouTubeVideo[]> {
    const url = `${this.API_URL}/search?part=snippet&type=video&q=${encodeURIComponent(query)}&maxResults=${maxResults}&key=${apiKey}`;
    
    return this.http.get<any>(url).pipe(
      map(response => {
        return response.items.map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default.url,
          channelTitle: item.snippet.channelTitle,
          publishedAt: item.snippet.publishedAt
        }));
      })
    );
  }

  /**
   * Get videos from a specific channel
   */
  getChannelVideos(channelId: string, maxResults: number = 10, apiKey: string): Observable<YouTubeVideo[]> {
    const url = `${this.API_URL}/search?part=snippet&channelId=${channelId}&type=video&order=date&maxResults=${maxResults}&key=${apiKey}`;
    
    return this.http.get<any>(url).pipe(
      map(response => {
        return response.items.map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default.url,
          channelTitle: item.snippet.channelTitle,
          publishedAt: item.snippet.publishedAt
        }));
      })
    );
  }

  /**
   * Get playlists from a channel
   */
  getChannelPlaylists(channelId: string, maxResults: number = 10, apiKey: string): Observable<YouTubePlaylist[]> {
    const url = `${this.API_URL}/playlists?part=snippet,contentDetails&channelId=${channelId}&maxResults=${maxResults}&key=${apiKey}`;
    
    return this.http.get<any>(url).pipe(
      map(response => {
        return response.items.map((item: any) => ({
          id: item.id,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default.url,
          itemCount: item.contentDetails.itemCount
        }));
      })
    );
  }

  /**
   * Get videos from a playlist
   */
  getPlaylistVideos(playlistId: string, maxResults: number = 10, apiKey: string): Observable<YouTubeVideo[]> {
    const url = `${this.API_URL}/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${apiKey}`;
    
    return this.http.get<any>(url).pipe(
      map(response => {
        return response.items.map((item: any) => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default.url,
          channelTitle: item.snippet.channelTitle,
          publishedAt: item.snippet.publishedAt
        }));
      })
    );
  }

  /**
   * Get popular videos by category/region
   */
  getPopularVideos(regionCode: string = 'US', maxResults: number = 10, apiKey: string): Observable<YouTubeVideo[]> {
    const url = `${this.API_URL}/videos?part=snippet&chart=mostPopular&regionCode=${regionCode}&maxResults=${maxResults}&key=${apiKey}`;
    
    return this.http.get<any>(url).pipe(
      map(response => {
        return response.items.map((item: any) => ({
          id: item.id,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default.url,
          channelTitle: item.snippet.channelTitle,
          publishedAt: item.snippet.publishedAt
        }));
      })
    );
  }
}
