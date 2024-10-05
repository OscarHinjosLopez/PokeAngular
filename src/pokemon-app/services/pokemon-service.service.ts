import { IPokemonData } from './../interface/pokemon-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { IPokemonList } from '../interface/pokemon-list';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  // Obtener todos los Pokémon
  getPokemons(limit: string, offset: string): Observable<IPokemonList> {
    return this.http.get<IPokemonList>(
      `${this.apiUrl}?limit=${limit}&offset=${offset}`
    );
  }

  // Obtener detalles de cada pokémon
  getPokemonDetails(
    pokemonUrls: { name: string; url: string }[]
  ): Observable<IPokemonData[]> {
    const detailsObservables = pokemonUrls.map((pokemon) =>
      this.http.get<IPokemonData>(pokemon.url)
    );
    return forkJoin(detailsObservables);
  }

  // Obtener detalles de un Pokémon por nombre
  getPokemonByName(name: string): Observable<IPokemonData> {
    return this.http.get<IPokemonData>(`${this.apiUrl}/${name}`);
  }

  // Obtener la lista completa de Pokémon
  getAllPokemonNames(): Observable<IPokemonList> {
    return this.getPokemons('1302', '0');
  }
}
