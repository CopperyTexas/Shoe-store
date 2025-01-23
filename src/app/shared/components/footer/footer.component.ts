import { Component } from '@angular/core';

import { ContactFooterComponent } from '../../contact-footer/contact-footer.component';
import { FooterLinksComponent } from '../../footer-links/footer-links.component';
import { PopularTodayComponent } from '../../popular-today/popular-today.component';
import { ShippingInfoComponent } from '../../shipping-info/shipping-info.component';

@Component({
  selector: 'app-footer',
  imports: [
    PopularTodayComponent,
    ShippingInfoComponent,
    ContactFooterComponent,
    FooterLinksComponent,
  ],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
