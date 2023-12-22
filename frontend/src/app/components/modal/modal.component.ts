import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() titulo: string = 'Mensaje';
  @Input() mensaje: string = 'Contenido del mensaje';
  @Input() mostrarBotonEnviar: boolean = false;
  @Input() textoCerrar: string = 'Cerrar';
  @Input() textoEnviar: string = 'Enviar';

  @Output() enviarClick = new EventEmitter<void>();

  constructor(public activeModal: NgbActiveModal) {}

  onEnviarClick(): void {
    this.enviarClick.emit();
    this.activeModal.close();
  }
  cerrarModal(): void {
    this.activeModal.dismiss();  // Cierra el modal al hacer clic en la "x" o el botón Cerrar
  }
}
