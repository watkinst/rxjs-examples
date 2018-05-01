import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableCreateComponent } from './observable-create.component';

describe('ObservableCreateComponent', () => {
  let component: ObservableCreateComponent;
  let fixture: ComponentFixture<ObservableCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
