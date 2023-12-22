import { Component, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.css'
})
export class TextboxComponent {
  @Input() itemSelected: any = {};
  comentario: string = '';

  constructor(private apiService: ApiService,private modalService: NgbModal) {}

  openModal(): void {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.titulo = 'Advertencia';
    modalRef.componentInstance.mensaje = '¿Está seguro que desea enviar los comentarios?';
    modalRef.componentInstance.mostrarBotonEnviar = true;
    modalRef.componentInstance.textoCerrar = 'Cerrar';
    modalRef.componentInstance.textoEnviar = 'Enviar comentarios';

    modalRef.componentInstance.enviarClick.subscribe(() => {
      // Lógica a ejecutar cuando se hace clic en el botón de enviar en el modal
      this.enviarComentariosModal();
    });
  }

  enviarComentariosModal(): void{
    console.log('Se hizo clic en Enviar');
    const datos = {
      arbol_id: this.itemSelected.arbol_id,
      comentario: this.comentario,
      postulante_id: 2063
    };
    console.log("datos")
    console.log(datos);

    /*this.apiService.postComentario(datos).subscribe(
      (respuesta) => {
        console.log('Respuesta del servidor:', respuesta);
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );*/
  }
}
