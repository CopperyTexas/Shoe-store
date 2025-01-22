import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  template: `
    <div class="w-40 flex gap-2 items-center">
      <img src="assets/images/logo/logo.svg" alt="Logo" />
      <h1 class="text-lg font-bold text-red-500">BEST SHOP</h1>
    </div>
  `,
})
export class LogoComponent {}
