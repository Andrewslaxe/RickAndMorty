import { Injectable } from '@angular/core'
import { Character, CharacterResponse } from '../characters/character'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class FilterService {
  characters: Character[] | undefined
  constructor(private http: HttpClient) { }

  getCharacters(page: number, status: String, specie: String, gender: String, name: String): Observable<CharacterResponse> {
    status ? status = '&status=' + status : status = ''
    specie ? specie = '&species=' + specie : specie = ''
    gender ? gender = '&gender=' + gender : gender = ''
    name = name.replace(' ', '%20')
    name ? name = '&name=' + name : name = ''

    return this.http.get<CharacterResponse>('https://rickandmortyapi.com/api/character/?page=' + page.toString() + status + specie + gender + name)
  }
}