import { Component } from "@angular/core"
import { FilterService } from './filter.service'
import { Character } from '../characters/character'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent {
  checkedSpecies: Record<string, boolean> = {
    'Alien': false,
    'Animal': false,
    'Cronenberg': false,
    'Disease': false,
    'Human': false,
    'Humanoid': false,
    'Mytholog': false,
    'Poopybutthole': false,
    'Robot': false,
    'Unknown': false
  };
  checkedGender: Record<string, boolean> = {
    'Female': false,
    'Male': false,
    'Genderless': false,
    'Unknown': false,
  };

  name: String = '';
  status: String = '';
  species = Object.keys(this.checkedSpecies)
  genders = Object.keys(this.checkedGender)
  actualPage: number = 1
  showSpecies = false;
  showGender = false;

  thisspecie: string = '';
  thisgender: string = '';
  thistatus: boolean = false;

  selectedSpecies: string[] = []
  selectedGender: string[] = []

  filteredCharacters: Character[] = []

  results: number = 0
  info: string[] = ['', '']
  clear() {
    for (let species of this.species) {
      this.checkedSpecies[species] = false
    }
    for (let genders of this.genders) {
      this.checkedGender[genders] = false
    }
    this.name = ''
    this.thistatus = false
    this.thisgender = ''
    this.thisspecie = ''
  }

  filter(page: number) {
    for (let characters of this.filteredCharacters) {
      this.filteredCharacters = []
    }
    if (this.thistatus === true) {
      this.status = 'alive'
    }
    this.filterservice.getCharacters(page, this.status, this.thisspecie, this.thisgender, this.name).subscribe(data => {
      this.filteredCharacters.push(...<[]>data.results)
      this.results = data.info?.count || 0
      this.info[0] = data.info?.next || ''
      this.info[1] = data.info?.prev || ''
    })
    this.showGender = false
    this.showSpecies = false
  }

  filterSpecies() {
    this.actualPage = 1
    this.filter(this.actualPage)
  }

  changePage(symbol: string): void {
    if (symbol === 'next') {
      this.actualPage++
    }
    else if (symbol === 'prev') {
      this.actualPage--
    }
    this.filter(this.actualPage)
  }

  setSpecies(event: any, specie: string) {
    if (event.target.checked) {
      this.checkedSpecies[this.thisspecie] = false
      this.checkedSpecies[specie] = true
      this.thisspecie = specie
    }
    else {
      this.thisspecie = ''
    }

  }

  setGenders(event: any, gender: string) {
    if (event.target.checked) {
      this.checkedGender[this.thisgender] = false
      this.checkedGender[gender] = true
      this.thisgender = gender

    }
    else {
      this.thisgender = ''
    }
  }

  toggleSpecies() {
    this.showSpecies = !this.showSpecies
    this.showGender = false
  }

  toggleGender() {
    this.showGender = !this.showGender
    this.showSpecies = false
  }


  constructor(private filterservice: FilterService) { }
  ngOnInit(): void {
    this.filterservice.getCharacters(1, '', '', '', '').subscribe(data => {
      this.filteredCharacters.push(...<[]>data.results)
      this.results = data.info?.count || 0
      this.info[0] = data.info?.next || ''
      this.info[1] = data.info?.prev || ''
    })
  }
}   
