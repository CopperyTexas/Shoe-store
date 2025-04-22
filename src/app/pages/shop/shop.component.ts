import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { NgForOf } from '@angular/common';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-shop',
  imports: [
    NgForOf,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    ProductCardComponent,
  ],
  standalone: true,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopComponent implements OnInit {
  productList: ProductModel[] = [];
  constructor(private ps: ProductsService) {}
  ngOnInit() {
    this.productList = this.ps.getProducts();
  }
}
