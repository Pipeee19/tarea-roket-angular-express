export class Ubicacion {

  ubicacion_id: number;
  latitud: number; 
  longitud: number;

  constructor( ubicacion_id: number, latitud: number, longitud: number) {
    this.ubicacion_id = ubicacion_id;
    this.latitud = latitud;
    this.longitud = longitud;
  }
}