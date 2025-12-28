import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SpotifyPlaylist {
  id: string;
  name: string;
  description: string;
  images: { url: string }[];
  external_urls: { spotify: string };
}

export interface SpotifyTrack {
  id: string;
  name: string;
  artists: { name: string }[];
  album: { name: string; images: { url: string }[] };
  external_urls: { spotify: string };
}

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private accessToken: string | null = null;
  private readonly AUTH_URL = 'https://accounts.spotify.com/authorize';
  private readonly TOKEN_URL = 'https://accounts.spotify.com/api/token';
  private readonly API_URL = 'https://api.spotify.com/v1';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Check if there's a token in sessionStorage (only in browser)
    if (isPlatformBrowser(this.platformId)) {
      this.accessToken = sessionStorage.getItem('spotify_access_token');
    }
  }

  /**
   * IMPORTANT: For frontend-only apps, use Implicit Grant Flow
   * Client Secret should NEVER be exposed in frontend code!
   */
  getAuthUrl(clientId: string, redirectUri: string): string {
    const scopes = [
      'user-read-private',
      'user-read-email',
      'playlist-read-private',
      'user-top-read'
    ].join(' ');

    const params = new URLSearchParams({
      client_id: clientId,
      response_type: 'token', // Implicit Grant - no client secret needed
      redirect_uri: redirectUri,
      scope: scopes,
      show_dialog: 'true'
    });

    return `${this.AUTH_URL}?${params.toString()}`;
  }

  setAccessToken(token: string): void {
    this.accessToken = token;
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem('spotify_access_token', token);
    }
  }

  isAuthenticated(): boolean {
    return !!this.accessToken;
  }

  logout(): void {
    this.accessToken = null;
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem('spotify_access_token');
    }
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    });
  }

  getUserPlaylists(): Observable<any> {
    return this.http.get(`${this.API_URL}/me/playlists`, {
      headers: this.getHeaders()
    });
  }

  getPlaylist(playlistId: string): Observable<any> {
    return this.http.get(`${this.API_URL}/playlists/${playlistId}`, {
      headers: this.getHeaders()
    });
  }

  getUserTopTracks(limit: number = 10): Observable<any> {
    return this.http.get(`${this.API_URL}/me/top/tracks?limit=${limit}`, {
      headers: this.getHeaders()
    });
  }

  getUserProfile(): Observable<any> {
    return this.http.get(`${this.API_URL}/me`, {
      headers: this.getHeaders()
    });
  }

  searchTracks(query: string, limit: number = 10): Observable<any> {
    const params = new URLSearchParams({
      q: query,
      type: 'track',
      limit: limit.toString()
    });
    
    return this.http.get(`${this.API_URL}/search?${params.toString()}`, {
      headers: this.getHeaders()
    });
  }
}
