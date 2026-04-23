import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from '../../components/card-item/card-item.component';
import { Produto } from '../../models/produto';
import { FavoritosService } from '../../services/favoritos';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [CommonModule, CardItemComponent],
  templateUrl: './listagem.component.html'
})
export class ListagemComponent {

  produtos: Produto[] = [
    { nome: 'Camiseta', tamanho: 'M', cor: 'Preta', preco: 50 },
    { nome: 'Calça', tamanho: 'G', cor: 'Azul', preco: 120 }
  ];

  constructor(private favService: FavoritosService) {}

  adicionarFavorito(produto: Produto) {
    this.favService.adicionar(produto);
  }
}