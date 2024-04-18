import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRRUAddComponent } from './view-rruadd.component';

describe('ViewRRUAddComponent', () => {
  let component: ViewRRUAddComponent;
  let fixture: ComponentFixture<ViewRRUAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRRUAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRRUAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
