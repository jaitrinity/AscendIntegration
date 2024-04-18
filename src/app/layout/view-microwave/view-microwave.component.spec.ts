import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMicrowaveComponent } from './view-microwave.component';

describe('ViewMicrowaveComponent', () => {
  let component: ViewMicrowaveComponent;
  let fixture: ComponentFixture<ViewMicrowaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMicrowaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMicrowaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
