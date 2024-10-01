import { Component, Input, OnInit } from '@angular/core';
import { Ability } from '../../../../interfaces/pokemon-search-interface';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrl: './abilities.component.scss'
})
export class AbilitiesComponent implements OnInit {
  @Input() abilities : Ability[] | undefined

  ngOnInit(): void {
    
  }
}
