import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProuductsComponent } from './admin-prouducts.component';

describe('AdminProuductsComponent', () => {
  let component: AdminProuductsComponent;
  let fixture: ComponentFixture<AdminProuductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProuductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProuductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
