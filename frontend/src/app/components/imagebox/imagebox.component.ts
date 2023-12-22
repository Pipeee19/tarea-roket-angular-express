import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagebox',
  templateUrl: './imagebox.component.html',
  styleUrl: './imagebox.component.css'
})
export class ImageboxComponent {
  @Input() images: any[] = [];

  @Input() url_image : string = "";
  index : number = 0

  retrocederFoto(){
    this.index--;
    this.url_image = this.images[this.index].url_foto;
    console.log(this.url_image);
    
  }

  avanzarFoto(){
    this.index++;
    this.url_image = this.images[this.index].url_foto;
    console.log(this.url_image);
  } 
}