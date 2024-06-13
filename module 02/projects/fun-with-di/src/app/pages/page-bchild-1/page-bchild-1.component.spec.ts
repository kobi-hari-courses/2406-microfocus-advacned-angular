import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBchild1Component } from './page-bchild-1.component';

describe('PageBchild1Component', () => {
  let component: PageBchild1Component;
  let fixture: ComponentFixture<PageBchild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBchild1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageBchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
