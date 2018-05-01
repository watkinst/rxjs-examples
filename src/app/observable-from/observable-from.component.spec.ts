import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableFromComponent } from './observable-from.component';

describe('ObservableFromComponent', () => {
  let component: ObservableFromComponent;
  let fixture: ComponentFixture<ObservableFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
