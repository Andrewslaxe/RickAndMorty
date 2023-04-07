import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Character, CharacterResponse } from './character'

@Injectable()
export class CharacterService {
  characters: Character[] | undefined
  constructor(private http: HttpClient) { }

  getCharacters(page: number): Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>('https://rickandmortyapi.com/api/character?page=' + page)
  }
}