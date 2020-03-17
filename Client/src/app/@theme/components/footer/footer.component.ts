import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="attribution">
      
  <a class="logo-font" routerLink="/">Reactable</a>
      &copy; {{ today | date: 'yyyy' }}
      An interactive 3D project from <a href="https://htl-leonding.ac.at">HTL</a>.
      Code licensed under MIT.
    </span>
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
  today: number = Date.now();
}
