import { Component, Input, OnInit } from '@angular/core';
import { Type } from '../../../../interfaces/pokemon-search-interface';
import { PokemonService } from '../../../../services/pokemon.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrl: './type.component.scss'
})
export class TypeComponent  implements OnInit{
  @Input() types : Type[] | undefined
  colorType : string | undefined


  constructor(
    protected pokemonService : PokemonService
  ) {

  }

  ngOnInit(): void {

  }

}
