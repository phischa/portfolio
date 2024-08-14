import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  constructor(public translationService: TranslationService) {}

  changeLanguage(language: 'en' | 'de') {
    this.translationService.setLanguage(language);
  }

  get portfolioText() {
    return this.translationService.currentPortfolioText;
  }
}
