import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Card } from '../../../models/card.model';
import { ProductCardComponent } from './../product-card/product-card.component';
@Component({
  selector: 'app-selected-products-main',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './selected-products-main.component.html',
  styleUrl: './selected-products-main.component.scss',
})
export class SelectedProductsMainComponent {
  cards: Card[] = [
    {
      image: 'assets/images/products/CardImg/Sneaker-1.png',
      title: 'Sneaker-1',
      price: 25,
    },
    {
      image: 'assets/images/products/CardImg/Sneaker-2.png',
      title: 'Sneaker-2',
      price: 20,
    },
    {
      image: 'assets/images/products/CardImg/Sneaker-3.png',
      title: 'Sneaker-3',
      price: 30,
    },
    {
      image: 'assets/images/products/CardImg/Sneaker-4.png',
      title: 'Sneaker-4',
      price: 35,
    },
  ];
}
