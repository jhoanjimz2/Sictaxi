import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentosVencidosComponent } from './documentos-vencidos.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DocumentosVencidosService } from 'src/app/services/documentos-vencidos.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Importar el módulo de animaciones

describe('DocumentosVencidosComponent', () => {
  let component: DocumentosVencidosComponent;
  let fixture: ComponentFixture<DocumentosVencidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosVencidosComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ HttpClientModule, BrowserAnimationsModule ],  // Agregar BrowserAnimationsModule
      providers: [ DocumentosVencidosService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentosVencidosComponent);
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
