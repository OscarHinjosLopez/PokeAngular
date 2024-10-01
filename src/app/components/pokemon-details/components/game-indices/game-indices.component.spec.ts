import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameIndicesComponent } from './game-indices.component';

describe('GameIndicesComponent', () => {
  let component: GameIndicesComponent;
  let fixture: ComponentFixture<GameIndicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameIndicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameIndicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
