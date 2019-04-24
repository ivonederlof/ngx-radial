import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRadialComponent } from './ngx-radial.component';

describe('NgxRadialComponent', () => {
  let component: NgxRadialComponent;
  let fixture: ComponentFixture<NgxRadialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxRadialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRadialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
