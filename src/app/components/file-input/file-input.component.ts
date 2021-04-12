import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FileInputService } from '../../services/file-input.service';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css']
})
export class FileInputComponent {

  inputFile = new FormControl(null);
  base64 = '';

  constructor(
    private _fileInputService: FileInputService
  ) { }

  showFile(e: any) {
    const file = e.target.files[0];
    this._fileInputService.readFile(file).then((base64: string) => {
      this.base64 = base64;
    });
  }

}
