import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'poke-angular';
  namePokemon : string | undefined

  handlePokemonName(pokemonName: string): void {
    this.namePokemon = pokemonName;
  }

}
