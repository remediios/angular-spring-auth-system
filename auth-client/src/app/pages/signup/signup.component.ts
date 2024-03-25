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
import { ToastrService } from 'ngx-toastr';
import { SignupService } from '../../services/signup.service';

interface SignUpForm {
  name: FormControl;
  email: FormControl;
  password: FormControl;
  passwordConfirm: FormControl;
}
interface SignUpForm {
  name: FormControl;
  email: FormControl;
  password: FormControl;
  passwordConfirm: FormControl;
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    DefaultSigninLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent,
  ],
  providers: [SignupService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signUpForm!: FormGroup<SignUpForm>;
  constructor(
    private router: Router,
    private signUpService: SignupService,
    private toastService: ToastrService
  ) {
    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      passwordConfirm: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit() {
    this.signUpService
      .signin(
        this.signUpForm.value.name,
        this.signUpForm.value.email,
        this.signUpForm.value.password
      )
      .subscribe({
        next: () => this.toastService.success('SignUp successfully'),
        error: () =>
          this.toastService.error(
            'Oops! Something went wrong, try again later'
          ),
      });
  }

  navigate() {
    return this.router.navigate(['/signin']);
  }
}
