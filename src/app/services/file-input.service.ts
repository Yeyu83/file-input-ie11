import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileInputService {
  constructor() {}

  readFile(file: File) {
    return new Promise<any>((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          resolve(reader.result);
        }
      };
      reader.onerror = () => reject;
      reader.readAsDataURL(file);
    });
  }
}
