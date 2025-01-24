import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-main',
  imports: [],
  templateUrl: './hero-main.component.html',
})
export class HeroMainComponent {
  images: string[] = [
    'assets/images/products/Product-1.png',
    'assets/images/products/Product-2.png',
    'assets/images/products/Product-3.png',
    'assets/images/products/Product-4.png',
  ];
}
