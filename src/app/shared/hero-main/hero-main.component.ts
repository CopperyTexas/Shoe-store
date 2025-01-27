import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-main',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hero-main.component.html',
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)', opacity: 1 })),
      state('out', style({ transform: 'translateX(100%)', opacity: 0 })),
      transition('out => in', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('1s ease-out'),
      ]),
      transition('in => out', [
        animate(
          '1s ease-in',
          style({ transform: 'translateX(100%)', opacity: 0 }),
        ),
      ]),
    ]),
  ],
})
export class HeroMainComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/images/products/Product-1.png',
    'assets/images/products/Product-2.png',
    'assets/images/products/Product-3.png',
    'assets/images/products/Product-4.png',
  ];
  currentImageIndex = 0; // Индекс текущего изображения
  intervalId: ReturnType<typeof setInterval> | null = null; // Таймер
  animationState = 'in';

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.animationState = 'out';
      setTimeout(() => {
        this.currentImageIndex =
          (this.currentImageIndex + 1) % this.images.length;
        this.animationState = 'in';
      }, 1000);
    }, 5000);
  }

  ngOnDestroy(): void {
    // Очищаем таймер при уничтожении компонента
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
