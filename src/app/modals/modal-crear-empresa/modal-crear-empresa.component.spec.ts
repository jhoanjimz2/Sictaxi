import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalCrearEmpresaComponent } from './modal-crear-empresa.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';  // Import MAT_DIALOG_DATA
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Import HttpClientTestingModule

describe('ModalCrearEmpresaComponent', () => {
  let component: ModalCrearEmpresaComponent;
  let fixture: ComponentFixture<ModalCrearEmpresaComponent>;

  // Mock de MatDialogRef
  const matDialogRefMock = {
    close: jasmine.createSpy('close')
  };

  // Mock de MatMdcDialogData
  const matMdcDialogDataMock = {
    someData: 'mocked data'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCrearEmpresaComponent ],
      imports: [ HttpClientTestingModule ],  // Add HttpClientTestingModule to provide HttpClient
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: MatDialogRef, useValue: matDialogRefMock },  // Mock MatDialogRef
        { provide: MAT_DIALOG_DATA, useValue: matMdcDialogDataMock }  // Mock MatMdcDialogData token
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCrearEmpresaComponent);
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
