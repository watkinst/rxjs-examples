import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestComponent } from './combine-latest.component';

describe('CombineLatestComponent', () => {
  let component: CombineLatestComponent;
  let fixture: ComponentFixture<CombineLatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombineLatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
