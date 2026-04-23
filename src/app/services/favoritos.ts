import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  private lista: Produto[] = [];

  adicionar(produto: Produto) {
    this.lista.push(produto);
  }

  listar(): Produto[] {
    return this.lista;
  }

  remover(produto: Produto) {
    this.lista = this.lista.filter(p => p !== produto);
  }
}
