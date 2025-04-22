import { ReviewsModel } from './reviews.model';

export interface ProductModel {
  name: string;
  imageUrl: string;
  price: number;
  score: number;
  article: number;
  description: string;
  details: string;
  sale?: boolean;
  reviews?: ReviewsModel[];
}
