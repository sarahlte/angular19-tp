import { CommonModule } from '@angular/common';
import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { Character } from '../../models/character.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character',
  imports: [
    CommonModule
  ],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  protected charactersService = inject(CharactersService);
  character: WritableSignal<Character | undefined> = signal(undefined)

  ngOnInit(): void{
    let id: number = Number(this.route.snapshot.params["id"]);
    if(!id){
      this.router.navigateByUrl("erreur/404");
    }
    this.charactersService.getCharacterByID(id).subscribe({
      next: (response) => {          
        this.character.set(response)
      },
      error: () => {
        console.log("error");
      }
      },
    );

  }
}
