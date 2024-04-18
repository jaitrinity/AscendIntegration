import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRRUDeleteComponent } from './view-rrudelete.component';

describe('ViewRRUDeleteComponent', () => {
  let component: ViewRRUDeleteComponent;
  let fixture: ComponentFixture<ViewRRUDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRRUDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRRUDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
