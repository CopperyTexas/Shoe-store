import { Component } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  name = '';
  email = '';
  topic = '';
  message = '';
  onSubmit(form: NgForm) {
    console.log('Форма отправлена: ', form.value);
    form.reset();
  }
}
