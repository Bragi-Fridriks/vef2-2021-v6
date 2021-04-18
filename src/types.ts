// Hér eru þær týpur sem við skilgreinum á móti GraphQL endapunkti

export interface ICharacter {
  id: string;
  name?: string;
  birthYear?: string;
  eyeColor?: string;
  hairColor?: string;
  height?: number;
  mass?: number;
}

interface ICharacters {
  characters?: Array<ICharacter>;
}

export interface ICharacterResponse {
  person: ICharacter;
}

export interface IFilm {
  id: string;
  title?: string;
  openingCrawl?: string;
  episodeID: number;
  characterConnection?: ICharacters;
}

interface IFilms {
  films?: Array<IFilm>;
}

export interface IFilmResponse {
  allFilms?: IFilms;
}

export interface IPeopleResponse {
  allPeople?: IPeoples;
}

interface IPeoples {
  pageInfo?: IPaging;
  people?: Array<ICharacter>;
}

interface IPaging {
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  startCursor?: string;
  endCursor?: string;
}
