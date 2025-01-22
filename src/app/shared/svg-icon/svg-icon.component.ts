import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  imports: [],
  standalone: true,
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.scss',
})
export class SvgIconComponent {
  @Input() name!: string;
  @Input() size = 24;
  get iconPath(): string {
    return `assets/icons/sprite.svg#${this.name}`;
  }
}
