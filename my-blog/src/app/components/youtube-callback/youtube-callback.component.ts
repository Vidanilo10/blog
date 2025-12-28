import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-youtube-callback',
  standalone: true,
  template: '<p>Connecting to YouTube...</p>',
  styles: ['p { text-align: center; margin-top: 2rem; font-size: 1.2rem; }']
})
export class YoutubeCallbackComponent implements OnInit {
  constructor(
    private router: Router,
    private youtubeService: YoutubeService
  ) {}

  ngOnInit(): void {
    // Get access token from URL fragment
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get('access_token');

    if (accessToken) {
      this.youtubeService.setAccessToken(accessToken);
      // Redirect back to music page
      this.router.navigate(['/music']);
    } else {
      // Error handling
      console.error('No access token received');
      this.router.navigate(['/music']);
    }
  }
}
