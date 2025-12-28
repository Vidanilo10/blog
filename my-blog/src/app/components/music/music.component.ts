import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SpotifyService, SpotifyPlaylist, SpotifyTrack } from '../../services/spotify.service';
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
  topTracks: SpotifyTrack[] = [];
  userProfile: any = null;
  spotifyClientId = environment.spotify.clientId;
  isLoading = false;

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
      this.loadUserData();
    }
  }

  loadUserData(): void {
    this.isLoading = true;
    
    // Load user profile
    this.spotifyService.getUserProfile().subscribe({
      next: (profile) => {
        this.userProfile = profile;
      },
      error: (error) => this.handleError(error)
    });

    // Load user playlists
    this.loadUserPlaylists();
    
    // Load top tracks
    this.loadTopTracks();
  }

  loadTopTracks(): void {
    this.spotifyService.getUserTopTracks(20).subscribe({
      next: (response) => {
        this.topTracks = response.items;
        this.isLoading = false;
      },
      error: (error) => {
        this.handleError(error);
        this.isLoading = false;
      }
    });
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
    this.topTracks = [];
    this.userProfile = null;
  }

  loadUserPlaylists(): void {
    this.spotifyService.getUserPlaylists().subscribe({
      next: (response) => {
        this.userPlaylists = response.items;
      },
      error: (error) => this.handleError(error)
    });
  }

  handleError(error: any): void {
    console.error('Spotify API Error:', error);
    if (error.status === 401) {
      // Token expired - disconnect and prompt user to reconnect
      this.disconnectSpotify();
      alert('Your Spotify session has expired. Please reconnect!');
    }
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
