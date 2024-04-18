import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBTSComponent } from './view-bts.component';

describe('ViewBTSComponent', () => {
  let component: ViewBTSComponent;
  let fixture: ComponentFixture<ViewBTSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBTSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
