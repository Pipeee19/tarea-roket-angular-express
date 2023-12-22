import { UbicacionData } from "../interface/ubicacionData.interface";


export class Arbol {
    arbol_id: number;
    nombre_arbol: string;
    ubicacion_id: number;
    created_at: string; 
    ubicacion: UbicacionData;
  
    constructor(arbol_id: number, nombre_arbol: string, ubicacion_id: number, created_at: string, ubicacion: UbicacionData) {
      this.arbol_id = arbol_id;
      this.nombre_arbol = nombre_arbol;
      this.ubicacion_id = ubicacion_id;
      this.created_at = created_at;
      this.ubicacion = ubicacion
    }
}