import { Component } from "@angular/core"

import { CharacterService } from "./character.service"
import { Character } from "./character"

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})


export class CharactersComponent {
  getPage: String | undefined = "next"
  characters: Character[] | undefined
  showCharacters: Character[] | undefined
  selectCharacter: Character | undefined
  actualPage: number = 1
  showThisCharacter(character: Character): void {
    this.selectCharacter = character
  }

  changeCharactersPage(symbol: string): void {
    if (symbol === 'next') {
      this.actualPage++
    } else {
      this.actualPage--
    }
    if (this.characters) {
      if (this.actualPage * 9 + 9 > this.characters?.length && this.getPage) {
        this.characterService.getCharacters((this.characters.length / 20) + 1).subscribe(data => {
          if (data.results) {
            this.getPage = data.info?.next
            this.characters?.push(...data.results)
          }
        })
      }
    }

    this.showCharacters = this.characters?.slice(this.actualPage * 9 - 9, this.actualPage * 9) || []
  }

  constructor(private characterService: CharacterService) { }
  ngOnInit(): void {
    this.characterService.getCharacters(1).subscribe(data => {
      this.characters = data.results
      this.showCharacters = this.characters?.slice(0, 9) || []
      this.selectCharacter = this.characters?.[0] || undefined
    })
  }
}
