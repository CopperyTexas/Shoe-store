import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-account',
  imports: [ReactiveFormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent implements OnInit {
  accountForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.accountForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
  }
  onSubmit() {
    if (this.accountForm.valid) {
      console.log(this.accountForm.value);
    } else {
      this.accountForm.markAllAsTouched();
    }
  }
}
