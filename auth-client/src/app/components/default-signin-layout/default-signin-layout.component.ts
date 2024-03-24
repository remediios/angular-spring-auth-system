import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Output('submit') onSubmit = new EventEmitter();
  @Output('navigate') onNavigate = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }

  navigate() {
    this.onNavigate.emit();
  }
}
