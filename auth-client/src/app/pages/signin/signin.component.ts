import { Component } from '@angular/core';
import { DefaultSigninLayoutComponent } from '../../components/default-signin-layout/default-signin-layout.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { SigninService } from '../../services/signin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    DefaultSigninLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent,
  ],
  providers: [SigninService],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent {
  signInForm!: FormGroup;
  constructor(
    private router: Router,
    private signInService: SigninService,
    private toastService: ToastrService
  ) {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit() {
    this.signInService
      .signin(this.signInForm.value.email, this.signInForm.value.password)
      .subscribe({
        next: () => this.toastService.success('Signin successfully'),
        error: (err) =>
          this.toastService.error(
            'Oops! Something went wrong, try again later'
          ),
      });
  }

  navigate() {
    return this.router.navigate(['/signup']);
  }
}
