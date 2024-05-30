import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowspaceComponent } from './arrowspace.component';

describe('ArrowspaceComponent', () => {
  let component: ArrowspaceComponent;
  let fixture: ComponentFixture<ArrowspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowspaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrowspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
