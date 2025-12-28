import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SpotifyService, SpotifyPlaylist } from '../../services/spotify.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent implements OnInit {
  // Spotify playlist embed URL (replace with your playlist ID)
  spotifyPlaylistUrl: SafeResourceUrl = '';
  
  // YouTube playlist or videos (replace with your video IDs)
  youtubeVideos = [
    { id: 'dQw4w9WgXcQ', title: 'Sample Video 1' },
    { id: 'jNQXAC9IVRw', title: 'Sample Video 2' }
  ];

  // Spotify Integration
  isSpotifyConnected = false;
  userPlaylists: SpotifyPlaylist[] = [];
  spotifyClientId = environment.spotify.clientId;

  constructor(
    private sanitizer: DomSanitizer,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    // Replace 'YOUR_PLAYLIST_ID' with your actual Spotify playlist ID
    const spotifyUrl = 'https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M';
    this.spotifyPlaylistUrl = this.sanitizer.bypassSecurityTrustResourceUrl(spotifyUrl);

    // Check if user is authenticated with Spotify
    this.isSpotifyConnected = this.spotifyService.isAuthenticated();
    
    if (this.isSpotifyConnected) {
      this.loadUserPlaylists();
    }
  }

  connectSpotify(): void {
    const authUrl = this.spotifyService.getAuthUrl(
      this.spotifyClientId,
      environment.spotify.redirectUri
    );
    window.location.href = authUrl;
  }

  disconnectSpotify(): void {
    this.spotifyService.logout();
    this.isSpotifyConnected = false;
    this.userPlaylists = [];
  }

  loadUserPlaylists(): void {
    this.spotifyService.getUserPlaylists().subscribe({
      next: (response) => {
        this.userPlaylists = response.items;
      },
      error: (error) => {
        console.error('Error loading playlists:', error);
        if (error.status === 401) {
          // Token expired
          this.disconnectSpotify();
        }
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
