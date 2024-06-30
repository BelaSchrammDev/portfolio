import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacydeComponent } from './privacyde.component';

describe('PrivacydeComponent', () => {
  let component: PrivacydeComponent;
  let fixture: ComponentFixture<PrivacydeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacydeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivacydeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
