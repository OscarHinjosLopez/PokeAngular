import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesPokemonComponent } from './images-pokemon.component';

describe('ImagesPokemonComponent', () => {
  let component: ImagesPokemonComponent;
  let fixture: ComponentFixture<ImagesPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImagesPokemonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
