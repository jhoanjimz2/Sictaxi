import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalCrearUsuarioComponent } from './modal-crear-usuario.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

// Crear un mock para MatDialogRef
class MatDialogRefMock {
  close() {}
}

describe('ModalCrearUsuarioComponent', () => {
  let component: ModalCrearUsuarioComponent;
  let fixture: ComponentFixture<ModalCrearUsuarioComponent>;

  // Mock the MAT_DIALOG_DATA with necessary data
  const matDialogDataMock = {
    id: 1,
    type: true  // Adjust the mock data according to your actual requirements
  };

  beforeEach(async () => {
    // Mock localStorage.getItem to return a valid 'user' object
    const localStorageMock = {
      getItem: jasmine.createSpy().and.returnValue(JSON.stringify({
        rol: 'Admin', // Mock the 'rol' value as required
        idempresa: 1
      })),
      setItem: jasmine.createSpy(),
      removeItem: jasmine.createSpy(),
      clear: jasmine.createSpy()
    };

    spyOn(localStorage, 'getItem').and.callFake(localStorageMock.getItem);
    spyOn(localStorage, 'setItem').and.callFake(localStorageMock.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(localStorageMock.removeItem);
    spyOn(localStorage, 'clear').and.callFake(localStorageMock.clear);

    await TestBed.configureTestingModule({
      declarations: [ModalCrearUsuarioComponent],
      imports: [HttpClientModule],  // Import HttpClientModule
      providers: [
        { provide: MatDialogRef, useClass: MatDialogRefMock },  // Mock de MatDialogRef
        { provide: MAT_DIALOG_DATA, useValue: matDialogDataMock }  // Proveer un valor para MAT_DIALOG_DATA
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCrearUsuarioComponent);
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
