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
    { nome: 'Calça', tamanho: 'G', cor: 'Azul', preco: 120 },
    { nome: 'Jaqueta', tamanho: 'G', cor: 'Preta', preco: 180 },
    { nome: 'Short', tamanho: 'M', cor: 'Cinza', preco: 60 },
    { nome: 'Vestido', tamanho: 'P', cor: 'Vermelho', preco: 140 },
    { nome: 'Blusa', tamanho: 'M', cor: 'Branca', preco: 70 },
    { nome: 'Moletom', tamanho: 'GG', cor: 'Preto', preco: 150 },
    { nome: 'Saia', tamanho: 'P', cor: 'Rosa', preco: 80 },
    { nome: 'Regata', tamanho: 'M', cor: 'Azul', preco: 45 },
    { nome: 'Camisa Social', tamanho: 'G', cor: 'Branca', preco: 110 },
    { nome: 'Bermuda', tamanho: 'M', cor: 'Bege', preco: 75 },
    { nome: 'Casaco', tamanho: 'GG', cor: 'Marrom', preco: 200 }
  ];

  constructor(private favService: FavoritosService) {}

adicionarFavorito(produto: any) {
  console.log('recebeu', produto); // 👈 TESTE
  this.favService.adicionar(produto);
}
}