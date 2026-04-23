import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-card-item',
  standalone: true,
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {

  @Input() produto!: Produto;

  @Output() favoritar = new EventEmitter<Produto>();

  addFav() {
    this.favoritar.emit(this.produto);
  }
  @Output() remover = new EventEmitter<Produto>();

  

  removerItem() {
    this.remover.emit(this.produto);
  }
}
