import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-models-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './models-main.component.html',
  styleUrl: './models-main.component.scss',
})
export class ModelsMainComponent {
  models = [
    {
      image: 'assets/images/products/models/Model-1.png',
      title: 'Elegant Motion',
      description:
        'Designed for women who value both style and comfort. These sneakers blend elegance with everyday practicality.',
    },
    {
      image: 'assets/images/products/models/Model-2.png',
      title: 'ActiveFit Pro',
      description:
        'Engineered for performance and endurance, these sneakers are your perfect partner for any workout.',
    },
    {
      image: 'assets/images/products/models/Model-3.png',
      title: 'AirFusion Max',
      description:
        'Featuring a sleek design and premium cushioning, these sneakers redefine modern streetwear.',
    },
    {
      image: 'assets/images/products/models/Model-4.png',
      title: 'Urban Classic',
      description:
        'A perfect choice for men seeking style and versatility. Comfort meets timeless design.',
    },
  ];
}
