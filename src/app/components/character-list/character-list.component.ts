import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { Character } from '../../models/character.model';
import { CharacterDetailsComponent } from '../../components/character-details/character-details.component';

@Component({
  selector: 'app-character-list',
  imports: [
    CharacterDetailsComponent
  ],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  private charactersService = inject(CharactersService);
  charactersDatalist: WritableSignal<Character[]> = signal([]);

  ngOnInit(): void {
    this.loadAllCharacters();
  }    

  loadAllCharacters(): void {
    this.charactersService.getCharactersList().subscribe((data: any) => {
      this.charactersDatalist.set(data.results);
    });  
  }
  
}
