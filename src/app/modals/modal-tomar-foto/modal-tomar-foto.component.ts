import { Component, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-modal-tomar-foto',
  templateUrl: './modal-tomar-foto.component.html',
  styleUrls: ['./modal-tomar-foto.component.scss']
})
export class ModalTomarFotoComponent {
  pictureTaken = new EventEmitter<WebcamImage>();
  trigger: Subject<void> = new Subject<void>();

  constructor( 
    private dialogRef: MatDialogRef<ModalTomarFotoComponent>,
  ) {}

  handleInitError(error: WebcamInitError): void {
    if (error.mediaStreamError && error.mediaStreamError.name === "NotAllowedError") {
      console.warn("Camera access was not allowed by user!");
    }
  }
  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
  tomarFoto(): void {
    this.trigger.next();
  }
  handleImage(webcamImage: WebcamImage): void {
    this.dialogRef.close({ html: webcamImage.imageAsDataUrl, file: this.dataURLtoFile(webcamImage.imageAsDataUrl) })
    this.pictureTaken.emit(webcamImage);
  }
  dataURLtoFile(dataurl: any) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], 'imgprofile', {type:mime});
  }
  cancelar() {
    this.dialogRef.close();
  }
}
