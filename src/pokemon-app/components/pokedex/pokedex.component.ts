import { IPokemonList } from './../../interface/pokemon-list';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonService } from '../../services/pokemon-service.service';
import { IPokemonData } from '../../interface/pokemon-data';
import { UtilsService } from '../../../app/services/utils-service.service';
import { catchError, finalize, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'pokemon-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokemonPokedex implements OnInit {
  displayedColumns: string[] = ['num', 'name', 'type', 'sprite'];
  dataSource = new MatTableDataSource<PokeTable>();
  totalPokemons = 0; // Total de Pokémon proporcionados por la API
  pageSize = 10; // Número de Pokémon por página
  currentPage = 0; // Página actual
  isLoading = false; // Indicador de carga
  errorMessage: string = ''; // Manejo de errores

  constructor(
    private pokemonService: PokemonService,
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  // Método para cargar Pokémon según la página actual
  loadPokemons(): void {
    this.isLoading = true; // Iniciar el spinner
    const offset = this.currentPage * this.pageSize; // Calcular offset

    this.pokemonService
      .getPokemons(this.pageSize.toString(), offset.toString())
      .pipe(
        // Para cada respuesta de lista, cargar detalles de Pokémon
        switchMap((response: IPokemonList) => {
          this.totalPokemons = response.count;
          return this.pokemonService.getPokemonDetails(response.results);
        }),
        map((details: IPokemonData[]) =>
          details.map((pokemon, index) => ({
            position: offset + index + 1,
            name: this.utilsService.capitalizeFirstLetter(pokemon.name),
            type: this.utilsService.capitalizeFirstLetter(
              pokemon.types.map((t) => t.type.name).join(', ')
            ),
            sprite: pokemon.sprites.front_default,
          }))
        ),
        catchError((error) => {
          this.errorMessage =
            'Failed to load Pokémon data. Please try again later.';
          console.error('Error loading Pokémon:', error);
          return of([]); // Devolver un array vacío en caso de error
        }),
        finalize(() => (this.isLoading = false)) // Detener spinner cuando termine la operación
      )
      .subscribe((tableData: PokeTable[]) => {
        this.dataSource.data = tableData;
      });
  }

  // Navegar a la página anterior
  goToPreviousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadPokemons();
    }
  }

  // Navegar a la siguiente página
  goToNextPage(): void {
    if ((this.currentPage + 1) * this.pageSize < this.totalPokemons) {
      this.currentPage++;
      this.loadPokemons();
    }
  }

  goDetailed(name: string): void {
    this.utilsService.redirectTo(`/pokemon/${name.toLowerCase()}`);
  }

}

export interface PokeTable {
  position: number;
  name: string;
  type: string;
  sprite: string;
}
