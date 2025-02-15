import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AchievementsComponent } from '../../shared/achievements/achievements.component';
import { ContactFormComponent } from '../../shared/contact-form/contact-form.component';

@Component({
  selector: 'app-contact-us',
  imports: [AchievementsComponent, CommonModule, ContactFormComponent],
  standalone: true,
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  achievements = [
    {
      image: 'assets/images/contacts/Place.png',
      title: 'Our Location',
      description:
        '123 Sneaker Avenue, New York, NY 456 Sport Street, Los Angeles, CA',
    },
    {
      image: 'assets/images/contacts/Time.png',
      title: 'Operating Time',
      description: 'Monday - Friday: 9am - 6 pm Weekends: 10:30 am - 6pm',
    },
    {
      image: 'assets/images/contacts/Mail.png',
      title: 'Our Email',
      description: 'best@shop.com info@bestshop.com ',
    },
    {
      image: 'assets/images/contacts/Phone.png',
      title: 'Call Us',
      description: 'Phone: +7(123)456-78-90 +7(987)654-32-10',
    },
  ];
}
