import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPolesComponent } from './view-poles.component';

describe('ViewPolesComponent', () => {
  let component: ViewPolesComponent;
  let fixture: ComponentFixture<ViewPolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
