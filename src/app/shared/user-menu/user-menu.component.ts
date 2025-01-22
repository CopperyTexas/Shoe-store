import { Component } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  imports: [],
  template: ` <ul class="w-32 flex justify-between">
    <li class="w-6 h-6">
      <button
        class="flex items-center rounded transform transition-transform hover:scale-150"
      >
        <img src="assets/icons/search.svg" alt="Search" class="w-6 h-6" />
      </button>
    </li>
    <li class="w-6 h-6">
      <button
        class="flex items-center rounded transform transition-transform hover:scale-150"
      >
        <img src="assets/icons/user.svg" alt="User" class="w-6 h-6" />
      </button>
    </li>
    <li class="w-6 h-6">
      <button
        class="flex items-center rounded transform transition-transform hover:scale-150"
      >
        <img
          src="assets/icons/shopping-cart.svg"
          alt="Shopping-cart"
          class="w-6 h-6"
        />
      </button>
    </li>
  </ul>`,
})
export class UserMenuComponent {}
