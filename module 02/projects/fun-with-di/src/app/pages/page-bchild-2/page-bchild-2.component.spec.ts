import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBchild2Component } from './page-bchild-2.component';

describe('PageBchild2Component', () => {
  let component: PageBchild2Component;
  let fixture: ComponentFixture<PageBchild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBchild2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageBchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
