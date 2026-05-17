import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';

@Pipe({
  name: 'imagenes',
  pure: true,
})
export class ImagenesPipe implements PipeTransform {
  transform(img: string): Observable<string> {
    if (!img || !this.isSupportedFormat(img)) {
      return of('assets/no-image.jpg');
    }

    if (this.isBase64(img)) {
      return of(img); // Retornar Base64 directamente
    }

    // Validar imagen HTTPS
    return new Observable<string>((observer) => {
      const image = new Image();
      image.src = img;

      image.onload = () => observer.next(img); // Imagen válida
      image.onerror = () => observer.next('assets/no-image.jpg'); // Imagen inválida
    });
  }

  private isSupportedFormat(img: string): boolean {
    return this.isUrl(img) || this.isBase64(img);
  }

  private isUrl(img: string): boolean {
    const urlPattern = /^https?:\/\//i;
    return urlPattern.test(img);
  }

  private isBase64(img: string): boolean {
    const base64Pattern = /^data:image\/(jpeg|png|gif|bmp|webp);base64,/i;
    return base64Pattern.test(img);
  }
}
