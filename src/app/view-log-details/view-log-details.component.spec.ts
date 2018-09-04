import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLogDetailsComponent } from './view-log-details.component';

describe('ViewLogDetailsComponent', () => {
  let component: ViewLogDetailsComponent;
  let fixture: ComponentFixture<ViewLogDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLogDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
