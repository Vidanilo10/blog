import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MusicComponent } from './components/music/music.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { CallbackComponent } from './components/callback/callback.component';
import { YoutubeCallbackComponent } from './components/youtube-callback/youtube-callback.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'music', component: MusicComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'youtube-callback', component: YoutubeCallbackComponent },
  { path: '**', redirectTo: '' }
];
