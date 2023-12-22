import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Arbol } from '../../models/arbol.model';
@Component({
  selector: 'app-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.css']
})
export class ListboxComponent  {
  @Input() titulo: string = '';
  @Input() items: any[] = [];
  @Input() itemClicked: any = {}
  @Output() selectedObject = new EventEmitter<any>(); 

  selectedItem: any = null;

  ngOnChanges(){
    this.selectedItem = this.itemClicked;
  }

  onSelectionChange(): void {
    this.selectedObject.emit(this.selectedItem);
  }

}