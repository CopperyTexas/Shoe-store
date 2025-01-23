import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-links',
  imports: [CommonModule],
  template: ` <li class="flex flex-col gap-3">
    <h6 class="font-bold mb-2">{{ title }}</h6>
    <ng-container *ngFor="let link of links">
      <a href="#" class="hover:text-red-500">{{ link }}</a>
    </ng-container>
  </li>`,
})
export class FooterLinksComponent {
  @Input() title!: string;
  @Input() links: string[] = [];
}
