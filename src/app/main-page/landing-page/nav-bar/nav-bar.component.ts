import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  @ViewChild('aboutMe') aboutMeRef!: ElementRef;

  scrollToAboutMe() {
    this.aboutMeRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
