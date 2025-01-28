import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AchievementsComponent } from '../../shared/achievements/achievements.component';

@Component({
  selector: 'app-about-us',
  imports: [AchievementsComponent, CommonModule],
  standalone: true,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  achievements = [
    {
      image: 'assets/images/achievements/Accuracy.png',
      title: 'Superior Accuracy',
      description:
        'We pay special attention to every detail, ensuring a high level of precision and quality in our footwear production.',
    },
    {
      image: 'assets/images/achievements/Awards.png',
      title: 'Awards',
      description:
        'Our numerous awards confirm our pursuit of excellence both in design and customer service.',
    },
    {
      image: 'assets/images/achievements/Ecological.png',
      title: 'Ecological',
      description:
        'We use eco-friendly materials and adopt responsible manufacturing methods to minimize environmental impact.',
    },
    {
      image: 'assets/images/achievements/Shipping.png',
      title: 'Shipping Worldwide',
      description:
        'Thanks to well-organized logistics, we offer fast and reliable worldwide delivery of our products.',
    },
  ];
}
