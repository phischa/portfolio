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
  isVisibleOne = false;
  isVisibleTwo: boolean[] = [false, false];
  
  constructor(public translationService: TranslationService) { }
  
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
  
    // Offset für das erste Element
    const offsetOne = 1050; 
    // Offset für die anderen Elemente
    const offsetTwo = 450; 
  
    elements.forEach((element, index) => {
      const elementTop = element.getBoundingClientRect().top;
  
      // Sichtbarkeit für das erste Element
      if (index === 0 && elementTop < windowHeight - offsetOne) {
        setTimeout(() => {
          this.isVisibleOne = true;
        }, 400);
      }
  
      // Sichtbarkeit für die anderen Elemente
      if (index > 0 && elementTop < windowHeight - offsetTwo) {
        setTimeout(() => {
          this.isVisibleTwo[index - 1] = true; // index - 1, da isVisibleTwo bei 0 beginnt
        }, 600);
      }
    });
  }
  
}
