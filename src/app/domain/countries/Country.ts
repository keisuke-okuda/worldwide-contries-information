export interface Country {
  name: string;
  population: number;
  region: string;
  capital: string;
  currencies: Currency[];
  languages: Language[];
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  iso639_1: string;
  name: string;
}
