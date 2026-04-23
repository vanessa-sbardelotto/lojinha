import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { SobreComponent } from './pages/sobre/sobre.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'listagem', component: ListagemComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];