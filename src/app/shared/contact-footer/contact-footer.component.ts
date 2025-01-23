import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-footer',
  imports: [],
  template: `<div>
    <h6 class="font-bold mb-2">Contact Us</h6>
    <p class="mb-8">
      Have questions or need assistance? We're here to help. Feel free to
      contact us or visit one of our stores
    </p>
    <h6 class="font-bold mb-2">Store Locations and Phone Numbers:</h6>
    <ul>
      <li class="flex gap-2 items-center mb-4">
        <span class="material-symbols-outlined text-red-500">store</span>
        <div>
          <h6 class="font-semibold">Main Store:</h6>
          <p>123 Sneaker Avenue, New York, NY</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </li>
      <li class="flex gap-2 items-center">
        <span class="material-symbols-outlined text-red-500">store</span>
        <div>
          <h6 class="font-semibold">Branch Store:</h6>
          <p>456 Sport Street, Los Angeles, CA</p>
          <p>Phone: (987) 654-3210</p>
        </div>
      </li>
    </ul>
  </div>`,
})
export class ContactFooterComponent {}
