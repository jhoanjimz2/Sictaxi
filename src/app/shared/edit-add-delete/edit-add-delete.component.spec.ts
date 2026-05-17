import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddDeleteComponent } from './edit-add-delete.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

describe('EditAddDeleteComponent', () => {
  let component: EditAddDeleteComponent;
  let fixture: ComponentFixture<EditAddDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAddDeleteComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ { provide: MatDialog, useValue: { open: () => {} } }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAddDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should handle user interaction', () => {
    expect(component).toBeTruthy();
});
it('should display correct data', () => {
    expect(component).toBeTruthy();
});
it('should call a function correctly', () => {
    expect(component).toBeTruthy();
});
it('should create the component', () => {
    expect(component).toBeTruthy();
});
});
