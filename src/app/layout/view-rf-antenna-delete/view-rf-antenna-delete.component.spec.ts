import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRfAntennaDeleteComponent } from './view-rf-antenna-delete.component';

describe('ViewRfAntennaDeleteComponent', () => {
  let component: ViewRfAntennaDeleteComponent;
  let fixture: ComponentFixture<ViewRfAntennaDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRfAntennaDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRfAntennaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
