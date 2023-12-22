import { Component } from '@angular/core';
import { ApiService } from '../app/services/api.service';
import { Arbol } from './models/arbol.model';
import { Foto } from './models/foto.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getArboles();
  }

  arboles: Arbol[] = [];
  fotos: Foto[] = []; 
  url_first_image : string = "";
  showLoader : boolean = false;
  showMapImage : boolean = false;
  itemClickedMap :  any = {}

  getArboles(): void {
    this.apiService.getArboles().subscribe(
      (data: any) => {
        this.arboles = data;
      },
      (error: any) => {
        console.error('Error al obtener la lista de árboles:', error);
      }
    );
  }

  getFotosbyArbolId(arbolId: number): void {
    this.showLoader = true;
    this.showMapImage = false;
    this.apiService.getFotosbyArbolId(arbolId).subscribe(
    (data: any) => {
      this.fotos = data;
      this.loadImages(this.fotos);
      setTimeout(()=> {
        this.showLoader = false;
        this.showMapImage = true;
      },500);      
    },
    (error: any) => {
      console.error('Error al obtener fotos:', error);
      this.showLoader = false;
      this.showMapImage = false;
    }
    );
  }

  loadImages(fotos: Foto[]): void {
    this.url_first_image = fotos[0].url_foto;
  }

  onArbolSelected(selectedArbol: Arbol): void {
    this.getFotosbyArbolId(selectedArbol.arbol_id);
    this.itemClickedMap = selectedArbol;    
  }
}