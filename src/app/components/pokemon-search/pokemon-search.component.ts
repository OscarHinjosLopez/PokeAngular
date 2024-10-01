import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent implements OnInit {

  @Output() namePokemon : EventEmitter<string> = new EventEmitter<string>()

  formGroup: FormGroup | any;

  constructor() {}

  ngOnInit(): void {
    this.setForm();
  }

  setForm(): void {
    this.formGroup = new FormGroup({
      pokemon: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    if (this.formGroup?.valid) {
      const pokemonName = this.formGroup.get('pokemon')?.value;
      this.namePokemon.emit(pokemonName)
    }
  }
}
