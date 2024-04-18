import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRRUUComponent } from './view-rruu.component';

describe('ViewRRUUComponent', () => {
  let component: ViewRRUUComponent;
  let fixture: ComponentFixture<ViewRRUUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRRUUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRRUUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
