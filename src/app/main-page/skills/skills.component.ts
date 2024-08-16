import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  isVisible = false;

  skills = [
    { src: 'assets/img/skills/html.svg', text: 'HTML' },
    { src: 'assets/img/skills/css.svg', text: 'CSS' },
    { src: 'assets/img/skills/js.svg', text: 'JavaScript' },
    { src: 'assets/img/skills/ts.svg', text: 'TypeScript' },
    { src: 'assets/img/skills/angular.svg', text: 'Angular' },
    { src: 'assets/img/skills/firebase.svg', text: 'Firebase' },
    { src: 'assets/img/skills/git.svg', text: 'Git' },
    { src: 'assets/img/skills/api.svg', text: 'API' },
    { src: 'assets/img/skills/scrum.svg', text: 'Scrum' },
    { src: 'assets/img/skills/material.svg', text: 'Material' },
    { src: 'assets/img/skills/continually-learning2.svg', text: 'Continually Learning', color: true }
  ];

  constructor(public translationService: TranslationService) { }

  changeLanguage(language: 'en' | 'de') {
    this.translationService.setLanguage(language);
  }

  get skillText() {
    return this.translationService.currentSkillText;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;
    let offset = 100;

    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - offset) {
        setTimeout(() => {
          this.isVisible = true;
        }, 500);
      }
    });
  }
}
