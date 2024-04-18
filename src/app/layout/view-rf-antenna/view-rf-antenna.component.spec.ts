import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRfAntennaComponent } from './view-rf-antenna.component';

describe('ViewRfAntennaComponent', () => {
  let component: ViewRfAntennaComponent;
  let fixture: ComponentFixture<ViewRfAntennaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRfAntennaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRfAntennaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
