import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosVencidosComponent } from './documentos-vencidos.component';

describe('DocumentosVencidosComponent', () => {
  let component: DocumentosVencidosComponent;
  let fixture: ComponentFixture<DocumentosVencidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosVencidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentosVencidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
