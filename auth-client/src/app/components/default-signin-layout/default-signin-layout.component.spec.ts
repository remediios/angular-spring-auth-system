import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultSigninLayoutComponent } from './default-signin-layout.component';

describe('DefaultSigninLayoutComponent', () => {
  let component: DefaultSigninLayoutComponent;
  let fixture: ComponentFixture<DefaultSigninLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultSigninLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultSigninLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
