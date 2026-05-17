import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-export-excel',
  templateUrl: './export-excel.component.html',
  styleUrls: ['./export-excel.component.scss']
})
export class ExportExcelComponent {
  @Output() export: EventEmitter<any> = new EventEmitter();
  @Input() exportMultiple: number = 0;
  exportar() {
    this.export.emit();
  }
  exportarPag(pag: number) {
    this.export.emit(pag);
  }
  get arr(): any[] {
    return new Array<number>(this.exportMultiple);
  }
}
