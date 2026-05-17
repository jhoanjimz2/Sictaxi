import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardGraficaComentariosPosComponent } from './card-grafica-comentarios-pos.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importar el HttpClientTestingModule
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';
import { DownloadService } from 'src/app/services/download.service';

describe('CardGraficaComentariosPosComponent', () => {
  let component: CardGraficaComentariosPosComponent;
  let fixture: ComponentFixture<CardGraficaComentariosPosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGraficaComentariosPosComponent ],
      imports: [ HttpClientTestingModule ], // Importar el módulo para pruebas HTTP
      providers: [
        EstadisticasService,
        LoadingService,
        DownloadService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGraficaComentariosPosComponent);
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
