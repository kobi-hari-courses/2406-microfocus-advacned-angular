import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrazyButtonComponent } from './crazy-button.component';

describe('CrazyButtonComponent', () => {
  let component: CrazyButtonComponent;
  let fixture: ComponentFixture<CrazyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrazyButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrazyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
