import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableFromEventComponent } from './observable-from-event.component';

describe('ObservableFromEventComponent', () => {
  let component: ObservableFromEventComponent;
  let fixture: ComponentFixture<ObservableFromEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableFromEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableFromEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
