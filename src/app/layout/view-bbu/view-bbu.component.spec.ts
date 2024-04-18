import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBBUComponent } from './view-bbu.component';

describe('ViewBBUComponent', () => {
  let component: ViewBBUComponent;
  let fixture: ComponentFixture<ViewBBUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBBUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBBUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
