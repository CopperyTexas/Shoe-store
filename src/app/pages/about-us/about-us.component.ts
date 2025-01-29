import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AchievementsComponent } from '../../shared/achievements/achievements.component';
import { OfferComponent } from '../../shared/offer/offer.component';
import { TeamcardComponent } from '../../shared/teamcard/teamcard.component';

@Component({
  selector: 'app-about-us',
  imports: [
    AchievementsComponent,
    CommonModule,
    RouterModule,
    TeamcardComponent,
    OfferComponent,
  ],
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
  team = [
    {
      name: 'Marlon Mcdonald',
      post: 'Product Manager',
      avatar: 'assets/images/faces/Marlon.png',
      socials: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
      },
    },
    {
      name: 'Rebecca Grand',
      post: 'Graphic Designer',
      avatar: 'assets/images/faces/Rebecca.png',
      socials: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
      },
    },
    {
      name: 'John Bailey',
      post: 'Head of Marketing',
      avatar: 'assets/images/faces/John.png',
      socials: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
      },
    },
  ];
}
