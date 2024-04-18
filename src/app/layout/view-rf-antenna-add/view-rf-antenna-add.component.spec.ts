import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRfAntennaAddComponent } from './view-rf-antenna-add.component';

describe('ViewRfAntennaAddComponent', () => {
  let component: ViewRfAntennaAddComponent;
  let fixture: ComponentFixture<ViewRfAntennaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRfAntennaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRfAntennaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
