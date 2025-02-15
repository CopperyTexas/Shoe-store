import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-today',
  imports: [],
  template: ` <section
    class="max-w-none h-42 bg-black px-52 py-6 -mx-52 font-text text-white"
  >
    <h5 class="font-bold">Popular Today</h5>
    <ul class="flex items-center justify-between gap-5 my-4">
      <li class="flex items-center gap-4">
        <figure>
          <img src="assets/images/footer/AirFlexPro.png" alt="AirFlex Pro" />
        </figure>
        <div>
          <h6 class="font-semibold">AirFlex Pro</h6>
          <p class="text-xs">Lightness in every step. New 2025 collection.</p>
        </div>
      </li>
      <li class="flex items-center gap-4">
        <figure>
          <img
            src="assets/images/footer/SportVibeBoost.png"
            alt="SportVibe Boost"
          />
        </figure>
        <div>
          <h6 class="font-semibold">SportVibe Boost</h6>
          <p class="text-xs">Energy for every day. Maximum cushioning.</p>
        </div>
      </li>
      <li class="flex items-center gap-4">
        <figure>
          <img
            src="assets/images/footer/TrailMasterX.png"
            alt="TrailMaster X"
          />
        </figure>
        <div>
          <h6 class="font-semibold">TrailMaster X</h6>
          <p class="text-xs">
            Designed for outdoor adventures. Durable and reliable.
          </p>
        </div>
      </li>
      <li class="flex items-center gap-4">
        <figure>
          <img src="assets/images/footer/UrbanRunner.png" alt="Urban Runner" />
        </figure>
        <div>
          <h6 class="font-semibold">Urban Runner</h6>
          <p class="text-xs">
            The perfect choice for the city. Comfort and style.
          </p>
        </div>
      </li>
    </ul>
  </section>`,
})
export class PopularTodayComponent {}
