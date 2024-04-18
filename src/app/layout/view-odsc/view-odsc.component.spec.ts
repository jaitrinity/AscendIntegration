import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOdscComponent } from './view-odsc.component';

describe('ViewOdscComponent', () => {
  let component: ViewOdscComponent;
  let fixture: ComponentFixture<ViewOdscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOdscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOdscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
