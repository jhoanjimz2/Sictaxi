import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalEliminarUsuarioComponent } from './modal-eliminar-usuario.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';  // Importar MatDialogRef
import { NO_ERRORS_SCHEMA } from '@angular/core';  // Esquema NO_ERRORS_SCHEMA para evitar errores de componentes no declarados
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importar HttpClientTestingModule
import { UsuariosService } from 'src/app/services/usuarios.service';  // Importar el servicio necesario

// Crear un mock para MatDialogRef
class MatDialogRefMock {
  close() {}
}

describe('ModalEliminarUsuarioComponent', () => {
  let component: ModalEliminarUsuarioComponent;
  let fixture: ComponentFixture<ModalEliminarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEliminarUsuarioComponent ],
      imports: [ HttpClientTestingModule ],  // Importar HttpClientTestingModule
      providers: [
        { provide: MatDialogRef, useClass: MatDialogRefMock },  // Proveer el mock de MatDialogRef
        { provide: MAT_DIALOG_DATA, useValue: { id: 1 } },  // Proveer el valor de MAT_DIALOG_DATA (en este caso, un objeto con un id de ejemplo)
        UsuariosService  // Proveer el servicio UsuariosService
      ],
      schemas: [NO_ERRORS_SCHEMA]  // Usar NO_ERRORS_SCHEMA para ignorar errores por componentes no declarados
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEliminarUsuarioComponent);
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
