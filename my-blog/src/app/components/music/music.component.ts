import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Replace 'YOUR_PLAYLIST_ID' with your actual Spotify playlist ID
    const spotifyUrl = 'https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M';
    this.spotifyPlaylistUrl = this.sanitizer.bypassSecurityTrustResourceUrl(spotifyUrl);
  }

  getSafeYoutubeUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
