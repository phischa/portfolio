import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactFormComponent } from './landing-page/contact-form/contact-form.component';




@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [AboutMeComponent, LandingPageComponent, PortfolioComponent, SkillsComponent, ContactFormComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
