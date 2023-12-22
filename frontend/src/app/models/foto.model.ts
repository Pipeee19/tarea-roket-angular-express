export class Foto {
    foto_id: number;
    url_foto: string;
    arbol_id: number;
  
    constructor(foto_id: number, url_foto: string, arbol_id: number) {
      this.foto_id = foto_id;
      this.url_foto = url_foto;
      this.arbol_id = arbol_id;
    }
}