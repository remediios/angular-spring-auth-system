import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-signin-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-signin-layout.component.html',
  styleUrl: './default-signin-layout.component.scss',
})
export class DefaultSigninLayoutComponent {
  @Input() title: string = '';
  @Input() primaryBtnText: string = '';
  @Input() secondaryBtnText: string = '';
}
