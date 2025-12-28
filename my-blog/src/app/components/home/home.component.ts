import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  features = [
    {
      icon: '🎬',
      title: 'Movies',
      description: 'Explore my curated collection of favorite movies with descriptions and ratings',
      link: '/movies'
    },
    {
      icon: '🎵',
      title: 'Music',
      description: 'Listen to my Spotify playlists and YouTube music videos',
      link: '/music'
    },
    {
      icon: '💼',
      title: 'Portfolio',
      description: 'View my professional portfolio and projects',
      link: '/portfolio'
    }
  ];
}
