import { Component } from '@angular/core';
import { DefaultSigninLayoutComponent } from '../../components/default-signin-layout/default-signin-layout.component';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [DefaultSigninLayoutComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent {}
