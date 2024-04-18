import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMassiveMimoComponent } from './view-massive-mimo.component';

describe('ViewMassiveMimoComponent', () => {
  let component: ViewMassiveMimoComponent;
  let fixture: ComponentFixture<ViewMassiveMimoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMassiveMimoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMassiveMimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
