import { inject, Injectable, OnInit, signal, WritableSignal } from "@angular/core";
import { Character } from "../models/character.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { map, Observable, tap } from "rxjs";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: "root"
})
export class CharactersService  {
  private characterApiUrl: string = "https://rickandmortyapi.com/api/character";

  private http = inject(HttpClient);
  private router = inject(Router);

  private toastr = inject(ToastrService);
  characters!: Character[];

  getCharactersList(): Observable<Character[]> {
    return this.http.get<any>(`${this.characterApiUrl}`);
  }

  getCharacterByID(characterId: number): Observable<Character>{
    return this.http.get<Character>(`${this.characterApiUrl}/${characterId}`).pipe(
      map((response) => response)
  )
  }

}