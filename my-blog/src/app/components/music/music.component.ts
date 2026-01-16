import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SpotifyService, SpotifyPlaylist, SpotifyTrack } from '../../services/spotify.service';
import { YoutubeService, YouTubeVideo } from '../../services/youtube.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent implements OnInit {
  // Recommended Spotify Playlists
  recommendedSpotifyPlaylists = [
    {
      id: '7Liy23N0CzfBAhv65Fpkmp',
      name: 'Silhouette',
      description: 'My personal curated playlist'
    },
    {
      id: '37i9dQZF1DXcBWIGoYBM5M',
      name: 'Today\'s Top Hits',
      description: 'The hottest tracks in the world right now'
    },
    {
      id: '4XWEODKTQQMhkS94qPR1HG',
      name: 'My Playlist',
      description: 'Another personal curated playlist'
    },
    {
      id: '37i9dQZF1DX0XUsuxWHRQd',
      name: 'RapCaviar',
      description: 'New music from Kendrick, Drake, and more'
    },
    {
      id: '37i9dQZF1DXcF6B6QPhFDv',
      name: 'Rock Classics',
      description: 'Rock legends & epic songs'
    },
    {
      id: '37i9dQZF1DX4SBhb3fqCJd',
      name: 'Peaceful Piano',
      description: 'Relax and indulge with beautiful piano pieces'
    },
    {
      id: '37i9dQZF1DX1lVhptIYRda',
      name: 'Hot Country',
      description: 'Today\'s hottest country hits'
    }
  ];

  // Recommended YouTube Playlists
  recommendedYouTubePlaylists = [
    {
      id: 'PLKHCOy02Wdik9RFgFygsLNG1-Mk1UANOg',
      name: 'My YouTube Music Playlist',
      description: 'Curated collection of my favorite tracks'
    }
  ];

  // Recommended YouTube Music Videos
  recommendedYouTubeVideos: YouTubeVideo[] = [
    { id: 'dGd9DTTrX4U', title: 'Alicia Keys: NPR Music Tiny Desk Concert', description: '', thumbnail: '', channelTitle: 'NPR Music', publishedAt: '' },
    { id: 'QrR_gm6RqCo', title: 'Mac Miller: NPR Music Tiny Desk Concert', description: '', thumbnail: '', channelTitle: 'NPR Music', publishedAt: '' },
    { id: '2CANclhdlaura', title: 'Leon Bridges: NPR Music Tiny Desk Concert', description: '', thumbnail: '', channelTitle: 'NPR Music', publishedAt: '' },
    { id: 'DFiLdByWIDY', title: 'Lizzo: NPR Music Tiny Desk Concert', description: '', thumbnail: '', channelTitle: 'NPR Music', publishedAt: '' },
    { id: 'yzTuBuRdAyA', title: 'Billie Eilish: NPR Music Tiny Desk (Home) Concert', description: '', thumbnail: '', channelTitle: 'NPR Music', publishedAt: '' },
    { id: 'kJQP7kiw5Fk', title: 'Luis Fonsi - Despacito ft. Daddy Yankee', description: '', thumbnail: '', channelTitle: 'Luis Fonsi', publishedAt: '' },
    { id: 'JGwWNGJdvx8', title: 'Ed Sheeran - Shape of You', description: '', thumbnail: '', channelTitle: 'Ed Sheeran', publishedAt: '' },
    { id: 'RgKAFK5djSk', title: 'Wiz Khalifa - See You Again ft. Charlie Puth', description: '', thumbnail: '', channelTitle: 'Wiz Khalifa', publishedAt: '' }
  ];

  youtubeVideos: YouTubeVideo[] = [];
  isYouTubeLoading = false;
  youtubeSearchQuery = 'music';
  isLoading = false;

  constructor(
    private sanitizer: DomSanitizer,
    private spotifyService: SpotifyService,
    private youtubeService: YoutubeService
  ) {}

  ngOnInit(): void {
    // Component initialized - recommendations will display automatically
  }

  loadYouTubeVideos(query: string): void {
    this.isYouTubeLoading = true;
    this.youtubeSearchQuery = query;
    
    this.youtubeService.searchVideos(query, 6, environment.youtube.apiKey).subscribe({
      next: (videos) => {
        this.youtubeVideos = videos;
        this.isYouTubeLoading = false;
      },
      error: (error) => {
        console.error('YouTube API Error:', error);
        this.isYouTubeLoading = false;
      }
    });
  }

  getSafeYoutubeUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getSafeYoutubePlaylistUrl(playlistId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/videoseries?list=${playlistId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getSafeSpotifyPlaylistUrl(playlistId: string): SafeResourceUrl {
    const url = `https://open.spotify.com/embed/playlist/${playlistId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
