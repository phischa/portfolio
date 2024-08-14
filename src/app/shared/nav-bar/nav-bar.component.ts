import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../translation.service';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  isMenuActive = false;

  constructor(private translationService: TranslationService) {}

  setLanguage(language: 'en' | 'de') {
    this.translationService.setLanguage(language);
  }

  @ViewChild('aboutMe') aboutMeRef!: ElementRef;

  scrollToAboutMe() {
    this.aboutMeRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }
}
