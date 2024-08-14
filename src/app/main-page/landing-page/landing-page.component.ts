import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  constructor(public translationService: TranslationService) {}

  changeLanguage(language: 'en' | 'de') {
    this.translationService.setLanguage(language);
  }

  get landingText() {
    return this.translationService.currentLandingText;
  }

  isGerman() {
    return this.translationService.currentLanguage === 'de';
  }
}


