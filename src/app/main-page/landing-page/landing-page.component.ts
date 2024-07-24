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
        <div class="shades">
          <img class="shade1" src="assets/img/shades/30. Purple shadow about me.svg" alt="">
          <img class="shade2" src="assets/img/shades/52. Blue shadow 1 V2.svg" alt="">
        </div>
    </section>
    `,
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
