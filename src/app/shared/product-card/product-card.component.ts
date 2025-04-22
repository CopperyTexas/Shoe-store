import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ProductModel } from '../../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() cards!: ProductModel;
}
