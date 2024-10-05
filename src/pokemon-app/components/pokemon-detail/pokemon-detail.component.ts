import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon-service.service';
import { IPokemonData, Stat } from '../../interface/pokemon-data';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  pokemonData: IPokemonData | null = null;
  statsDataSource: any[] = [];
  displayedColumns: string[] = ['statName', 'baseStat', 'effort'];
  isLoading = true;
  allPokemonNames: string[] = []; // List of all Pokémon names

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    // Load all Pokémon names when the component initializes
    this.pokemonService.getAllPokemonNames().subscribe((response) => {
      this.allPokemonNames = response.results.map((pokemon) => pokemon.name);
    });

    // Load current Pokémon details based on the route name
    const pokemonName = this.route.snapshot.paramMap.get('name');
    if (pokemonName) {
      this.loadPokemonDetails(pokemonName);
    }
  }

  // Method to load Pokémon details by name
  loadPokemonDetails(name: string): void {
    this.isLoading = true;
    this.pokemonService.getPokemonByName(name).subscribe(
      (data) => {
        this.pokemonData = data;
        this.extractStats(data.stats); // Extract stats for the table
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching Pokémon details', error);
        this.isLoading = false;
      }
    );
  }

  // Extract stats and prepare data for the table
  extractStats(stats: Stat[]): void {
    this.statsDataSource = stats.map((stat) => ({
      statName: stat.stat.name,
      baseStat: stat.base_stat,
      effort: stat.effort,
    }));
  }

  // Navigate to the previous Pokémon
  goToPreviousPokemon(): void {
    const currentIndex = this.allPokemonNames.indexOf(
      this.pokemonData?.name || ''
    );
    if (currentIndex > 0) {
      const previousName = this.allPokemonNames[currentIndex - 1];
      this.router.navigate(['/pokemon', previousName]);
      this.loadPokemonDetails(previousName);
    }
  }

  // Navigate to the next Pokémon
  goToNextPokemon(): void {
    const currentIndex = this.allPokemonNames.indexOf(
      this.pokemonData?.name || ''
    );
    if (currentIndex < this.allPokemonNames.length - 1) {
      const nextName = this.allPokemonNames[currentIndex + 1];
      this.router.navigate(['/pokemon', nextName]);
      this.loadPokemonDetails(nextName);
    }
  }
}
