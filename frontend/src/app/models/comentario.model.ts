export class Comentario {
    com_id: number;
    arbol_id: number;
    comentario: string;
    postulante_id: number;
    created_at: string; 
  
    constructor(com_id: number, arbol_id: number, comentario: string, postulante_id: number, created_at: string) {
      this.com_id = com_id;
      this.arbol_id = arbol_id;
      this.comentario = comentario;
      this.postulante_id = postulante_id;
      this.created_at = created_at;
    }
}