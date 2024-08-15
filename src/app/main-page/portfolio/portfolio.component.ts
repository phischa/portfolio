import { Component, HostListener } from '@angular/core';
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
  isVisible: boolean[] = [false, false, false];

  constructor(public translationService: TranslationService) {}

  changeLanguage(language: 'en' | 'de') {
    this.translationService.setLanguage(language);
  }

  get portfolioText() {
    return this.translationService.currentPortfolioText;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    elements.forEach((element, index) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight) {
        setTimeout(() => {
          this.isVisible[index] = true; 
        }, 750);
      }
    });
  }
}
