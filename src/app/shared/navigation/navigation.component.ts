import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterModule],
  template: `
    <nav class="mx-auto w-max my-8">
      <ul class="flex justify-between gap-14 font-bold">
        <li>
          <a
            routerLink="/home"
            routerLinkActive="text-red-500"
            class="hover:text-red-500 cursor-pointer"
            >Home</a
          >
        </li>
        <li>
          <a
            routerLink="/shop"
            routerLinkActive="text-red-500"
            class="hover:text-red-500 cursor-pointer"
            >Shop</a
          >
        </li>
        <li>
          <a
            routerLink="/about-us"
            routerLinkActive="text-red-500"
            class="hover:text-red-500 cursor-pointer"
            >About Us</a
          >
        </li>
        <li>
          <a
            routerLink="/contact-us"
            routerLinkActive="text-red-500"
            class="hover:text-red-500 cursor-pointer"
            >Contact Us</a
          >
        </li>
      </ul>
    </nav>
  `,
})
export class NavigationComponent {}
