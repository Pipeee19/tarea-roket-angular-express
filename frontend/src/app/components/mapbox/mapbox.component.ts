import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as L from 'leaflet';
import { Arbol } from '../../models/arbol.model';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrl: './mapbox.component.css'
})
export class MapboxComponent {
  @Input() items : Arbol[] = [];
  @Input() itemSelected : Arbol = {
    arbol_id: 0, 
    created_at: "", 
    nombre_arbol: "",
    ubicacion: {latitud: 0, longitud: 0}, 
    ubicacion_id:0
  };
  @Output() selectedObject = new EventEmitter<any>(); 
  map: any;


  ngOnChanges(){
    if (this.items.length > 0)  this.initMap();
  }

  initMap() {
    this.map = L.map('map').setView([this.itemSelected.ubicacion.latitud, this.itemSelected.ubicacion.longitud],5);
    L.marker([this.itemSelected.ubicacion.latitud, this.itemSelected.ubicacion.longitud])
    .addTo(this.map)
    .bindPopup(this.itemSelected.nombre_arbol)
    .openPopup();
    //console.log(this.items)
    this.items.forEach((arbol)=>{
      const {ubicacion} = arbol
      const marker = L.marker([ubicacion.latitud, ubicacion.longitud])
      .addTo(this.map)      
      marker.on('click', (event) => {
        this.onMarkerClick(event);
      });
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
      
  }
  onMarkerClick(event: any) {
    
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    const arbolesClicados: Arbol[] = this.items.filter(arbol => arbol.ubicacion.latitud == lat && arbol.ubicacion.longitud == lng);
    if (arbolesClicados.length > 0) {
      const arbolClicado: Arbol = arbolesClicados[0];
      console.log('Objeto clicado:', arbolClicado);
      // Emitir el árbol seleccionado al componente Listbox
      this.selectedObject.emit(arbolClicado);
    } else {
      console.log('Ningún objeto encontrado en la ubicación clicada.');
    }

  }
}
