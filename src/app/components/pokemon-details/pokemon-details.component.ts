import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Subject, takeUntil } from 'rxjs';
import { IPokemonData } from '../../interfaces/pokemon-search-interface';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss',
})

export class PokemonDetailsComponent implements OnInit, OnDestroy, OnChanges {
  dataPokemon: IPokemonData | any;
  @Input() namePokemon: string | undefined;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['namePokemon'] && this.namePokemon) {
      this.getPokemon(this.namePokemon.toLowerCase());
    }
  }

  getPokemon(nameOrId: string): void {
    this.pokemonService
      .getPokemon(nameOrId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((dataPokemon: IPokemonData) => {
        this.dataPokemon = dataPokemon;
        console.log(this.dataPokemon);
      });
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
