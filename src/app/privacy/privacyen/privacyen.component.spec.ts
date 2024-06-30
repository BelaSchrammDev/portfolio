import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyenComponent } from './privacyen.component';

describe('PrivacyenComponent', () => {
  let component: PrivacyenComponent;
  let fixture: ComponentFixture<PrivacyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivacyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
