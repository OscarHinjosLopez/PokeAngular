import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { AbilitiesComponent } from './components/pokemon-details/components/abilities/abilities.component';
import { BaseExperienceComponent } from './components/pokemon-details/components/base-experience/base-experience.component';
import { GameIndicesComponent } from './components/pokemon-details/components/game-indices/game-indices.component';
import { ImagesPokemonComponent } from './components/pokemon-details/components/images-pokemon/images-pokemon.component';
import { TypeComponent } from './components/pokemon-details/components/type/type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PokemonSearchComponent,
    PokemonDetailsComponent,
    AbilitiesComponent,
    BaseExperienceComponent,
    GameIndicesComponent,
    ImagesPokemonComponent,
    TypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
