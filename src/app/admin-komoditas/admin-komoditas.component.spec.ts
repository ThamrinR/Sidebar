import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKomoditasComponent } from './admin-komoditas.component';

describe('AdminKomoditasComponent', () => {
  let component: AdminKomoditasComponent;
  let fixture: ComponentFixture<AdminKomoditasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminKomoditasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKomoditasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
