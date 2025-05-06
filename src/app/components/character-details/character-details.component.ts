import { Character } from '../../models/character.model';
import { CharactersService } from '../../services/characters.service';
import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-details',
  imports: [
    CommonModule
  ],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent {
  protected charactersService = inject(CharactersService);
  private router = inject(Router);
  @Input({required: true}) character!: Character;

  onShowCharacter(id: number): void{
    this.router.navigateByUrl(`characters/character/${id}`);
  }

}
