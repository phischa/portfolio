import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
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
}
