import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  portfolioUrl = 'https://vidanilo10.github.io/portfolio-dark-blue/';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Auto-redirect after 3 seconds (only in browser)
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        window.location.href = this.portfolioUrl;
      }, 3000);
    }
  }

  goToPortfolio(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = this.portfolioUrl;
    }
  }
}
