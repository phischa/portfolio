import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavBarComponent],
  template: `
    <section>
        <app-nav-bar></app-nav-bar>
        <div class="titel-box">
          <div class="title-rotate">
            <span>I am</span>
          </div>
          <div class="titel">
            <h1>Philip Schaper</h1>
            <h2>FRONTEND DEVELOPER</h2>
          </div>
        </div>
        <button class="btn-primary margin-top48">Let's talk</button>
    </section>    
    `,
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
