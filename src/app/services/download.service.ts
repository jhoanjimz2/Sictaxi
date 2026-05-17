import { Injectable }          from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  download(data: Blob, name: string) {
    const url = URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    ;
  }


}
