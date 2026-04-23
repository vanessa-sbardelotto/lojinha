import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosService } from '../../services/favoritos';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favoritos.component.html'
})
export class FavoritosComponent {

  favoritos: Produto[] = [];

  constructor(private favService: FavoritosService) {
    this.favoritos = this.favService.listar();
  }

  remover(item: Produto) {
    this.favService.remover(item);
    this.favoritos = this.favService.listar();
  }
}