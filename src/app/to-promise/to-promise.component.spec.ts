import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToPromiseComponent } from './to-promise.component';

describe('ToPromiseComponent', () => {
  let component: ToPromiseComponent;
  let fixture: ComponentFixture<ToPromiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToPromiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
