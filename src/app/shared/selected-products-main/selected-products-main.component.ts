import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductModel } from '../../../models/product.model';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-selected-products-main',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './selected-products-main.component.html',
  styleUrl: './selected-products-main.component.scss',
})
export class SelectedProductsMainComponent implements OnInit {
  productList: ProductModel[] = [];
  constructor(private ps: ProductsService) {}
  ngOnInit() {
    this.productList = this.ps.getRandomProducts(4);
  }
}
