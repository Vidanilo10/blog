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
      id: '37i9dQZF1DXcBWIGoYBM5M',
      name: 'Today\'s Top Hits',
      description: 'The hottest tracks in the world right now'
    },
    {
      id: '37i9dQZF1DX4dyzvuaRJ0n',
      name: 'Mint',
      description: 'The best new music'
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

  // Recommended YouTube Music Videos
  recommendedYouTubeVideos: YouTubeVideo[] = [
    { id: 'dQw4w9WgXcQ', title: 'Rick Astley - Never Gonna Give You Up', description: '', thumbnail: '', channelTitle: 'Rick Astley', publishedAt: '' },
    { id: 'kJQP7kiw5Fk', title: 'Luis Fonsi - Despacito ft. Daddy Yankee', description: '', thumbnail: '', channelTitle: 'Luis Fonsi', publishedAt: '' },
    { id: '9bZkp7q19f0', title: 'Gangnam Style', description: '', thumbnail: '', channelTitle: 'officialpsy', publishedAt: '' },
    { id: 'fJ9rUzIMcZQ', title: 'Imagine Dragons - Believer', description: '', thumbnail: '', channelTitle: 'ImagineDragons', publishedAt: '' },
    { id: 'CevxZvSJLk8', title: 'Katy Perry - Roar', description: '', thumbnail: '', channelTitle: 'Katy Perry', publishedAt: '' },
    { id: 'JGwWNGJdvx8', title: 'Ed Sheeran - Shape of You', description: '', thumbnail: '', channelTitle: 'Ed Sheeran', publishedAt: '' },
    { id: 'RgKAFK5djSk', title: 'Wiz Khalifa - See You Again', description: '', thumbnail: '', channelTitle: 'Wiz Khalifa', publishedAt: '' },
    { id: 'hLQl3WQQoQ0', title: 'Adele - Someone Like You', description: '', thumbnail: '', channelTitle: 'Adele', publishedAt: '' }
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

  getSafeSpotifyPlaylistUrl(playlistId: string): SafeResourceUrl {
    const url = `https://open.spotify.com/embed/playlist/${playlistId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
