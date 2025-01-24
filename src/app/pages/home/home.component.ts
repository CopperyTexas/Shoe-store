import { Component } from '@angular/core';
import { HeroMainComponent } from '../../shared/hero-main/hero-main.component';

@Component({
  selector: 'app-home',
  imports: [HeroMainComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
