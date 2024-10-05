// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPokemonComponent } from './pages/app-pokemon/app-pokemon.component';

// src/app/app-routing.module.ts
const routes: Routes = [
  {
    path: '',
    component: AppPokemonComponent,

  },
  {
    path: 'home',
    component: AppPokemonComponent,
    pathMatch: 'full'
  },
  {
    path: 'pokemon',
    loadChildren: () =>
      import('../pokemon-app/pokemon-app.module').then(
        (m) => m.PokemonAppModule
      ),
    data: { showHeader: false }, // No mostrar el header en esta ruta
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
