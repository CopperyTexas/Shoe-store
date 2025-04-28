import { Component, Input } from '@angular/core';
import { ProductModel } from '../../../models/product.model';

@Component({
  selector: 'app-best-model',
  imports: [],
  templateUrl: './best-model.component.html',
  styleUrl: './best-model.component.scss',
})
export class BestModelComponent {
  @Input() cards!: ProductModel;
}
