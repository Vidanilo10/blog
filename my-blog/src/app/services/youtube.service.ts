import { Injectable } from '@angular/core';
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

  constructor(private http: HttpClient) {}

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
