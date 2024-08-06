import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  isMenuActive = false;
  @ViewChild('aboutMe') aboutMeRef!: ElementRef;

  scrollToAboutMe() {
    this.aboutMeRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }
}
