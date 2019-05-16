import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingBillComponent } from './pending-bill.component';

describe('PendingBillComponent', () => {
  let component: PendingBillComponent;
  let fixture: ComponentFixture<PendingBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
