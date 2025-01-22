import { Component } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-social-icons',
  standalone: true,
  imports: [SvgIconComponent],
  template: `
    <ul class="w-32 flex justify-between">
      <li class="w-6 h-6">
        <a
          href="https://facebook.com"
          target="_blank"
          aria-label="Facebook"
          rel="noopener noreferrer"
          class="inline-block transform transition-transform hover:-translate-y-1"
        >
          <app-svg-icon name="facebook"></app-svg-icon>
        </a>
      </li>
      <li class="w-6 h-6">
        <a
          href="https://twitter.com"
          target="_blank"
          aria-label="Twitter"
          rel="noopener noreferrer"
          class="inline-block transform transition-transform hover:-translate-y-1"
        >
          <app-svg-icon name="twitter"></app-svg-icon>
        </a>
      </li>
      <li class="w-6 h-6">
        <a
          href="https://instagram.com"
          target="_blank"
          aria-label="Instagram"
          rel="noopener noreferrer"
          class="inline-block transform transition-transform hover:-translate-y-1"
        >
          <app-svg-icon name="instagram"></app-svg-icon>
        </a>
      </li>
    </ul>
  `,
})
export class SocialIconsComponent {}
