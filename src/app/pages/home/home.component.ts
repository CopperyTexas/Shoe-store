import { Component } from '@angular/core';
import { HeroMainComponent } from '../../shared/hero-main/hero-main.component';
import { ModelsMainComponent } from '../../shared/models-main/models-main.component';
import { OfferComponent } from '../../shared/offer/offer.component';
import { ReviewsComponent } from '../../shared/reviews/reviews.component';
import { SelectedProductsMainComponent } from '../../shared/selected-products-main/selected-products-main.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroMainComponent,
    ModelsMainComponent,
    SelectedProductsMainComponent,
    OfferComponent,
    ReviewsComponent,
  ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
