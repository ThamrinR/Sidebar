import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPelangganComponent } from './admin-pelanggan.component';

describe('AdminPelangganComponent', () => {
  let component: AdminPelangganComponent;
  let fixture: ComponentFixture<AdminPelangganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPelangganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPelangganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
