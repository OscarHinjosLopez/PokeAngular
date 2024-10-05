// src/app/pokemon-app/pokemon-app.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonAppRoutingModule } from './pokemon-app-routing.module'; // Asegúrate de importar el módulo correcto
import { MaterialModule } from '../app/material/material.module';
import { HeaderPokemonComponent } from './components/header-pokemon/header-pokemon.component';
import { PokemonPokedex } from './components/pokedex/pokedex.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    HeaderPokemonComponent,
    PokemonPokedex,
    PokemonDetailComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    PokemonAppRoutingModule
  ]
})
export class PokemonAppModule { }
