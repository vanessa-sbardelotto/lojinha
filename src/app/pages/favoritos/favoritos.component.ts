import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosService } from '../../services/favoritos';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favoritos.component.html'
})
export class FavoritosComponent implements OnInit {

  favoritos: Produto[] = [];

  constructor(private favService: FavoritosService) {}

  ngOnInit() {
    this.favoritos = this.favService.listar();
  }

  remover(item: Produto) {
    this.favService.remover(item);
    this.favoritos = this.favService.listar();
  }
}