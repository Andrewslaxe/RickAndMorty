export class Character {
  id: number | undefined
  name: string | undefined
  status: string | undefined
  species: string | undefined
  type: string | undefined
  gender: string | undefined
  origin: origin | undefined
  location: location | undefined
  image: string | undefined
  episode: string[] | undefined
}

export class location {
  name: string | undefined
  url: string | undefined
}

export class origin {
  name: string | undefined
  url: string | undefined
}
export class infoCharacter {
  count: number | undefined
  pages: number | undefined
  next: string | undefined
  prev: string | undefined
}

export class CharacterResponse {
  info: infoCharacter | undefined
  results: Character[] | undefined
}
