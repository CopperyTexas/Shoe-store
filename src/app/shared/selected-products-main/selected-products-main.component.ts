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
      title: 'Velocity Edge',
      price: 25,
    },
    {
      image: 'assets/images/products/CardImg/Sneaker-2.png',
      title: 'Stride Nova',
      price: 20,
    },
    {
      image: 'assets/images/products/CardImg/Sneaker-3.png',
      title: 'Pulse Reactor',
      price: 30,
    },
    {
      image: 'assets/images/products/CardImg/Sneaker-4.png',
      title: 'Urban Glide',
      price: 35,
    },
  ];
}
