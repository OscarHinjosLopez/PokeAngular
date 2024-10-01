import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Sprites, Versions } from '../../../../interfaces/pokemon-search-interface';

@Component({
  selector: 'app-images-pokemon',
  templateUrl: './images-pokemon.component.html',
  styleUrls: ['./images-pokemon.component.scss'],
})
export class ImagesPokemonComponent implements OnChanges {
  @Input() images: Sprites | undefined;
  versionEntries: { generation: string; games: { name: string; url: string | null }[] }[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['images'] && changes['images'].currentValue) {
      this.loadImages();
    }
  }

  loadImages(): void {
    if (this.images?.versions) {
      this.versionEntries = Object.entries(this.images.versions).map(
        ([generationKey, generationValue]) => {
          const gameSprites = Object.entries(generationValue as Record<string, Sprites>)
            .filter(([key, value]) => value.front_default)
            .map(([gameKey, gameValue]) => ({
              name: gameKey.replace('_', ' '),
              url: (gameValue as Sprites).front_default,
            }));

          return {
            generation: generationKey.replace('_', ' ').toUpperCase(),
            games: gameSprites,
          };
        }
      );
    }
  }
}
