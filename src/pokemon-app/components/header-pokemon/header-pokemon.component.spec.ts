import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPokemonComponent } from './header-pokemon.component';

describe('HeaderPokemonComponent', () => {
  let component: HeaderPokemonComponent;
  let fixture: ComponentFixture<HeaderPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderPokemonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
