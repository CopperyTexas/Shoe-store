import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { NgForOf } from '@angular/common';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';

@Component({
  selector: 'app-shop',
  imports: [NgForOf, ProductCardComponent],
  standalone: true,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent implements OnInit {
  productList: ProductModel[] = [];
  constructor(private ps: ProductsService) {}
  ngOnInit() {
    this.productList = this.ps.getProducts();
  }
}
