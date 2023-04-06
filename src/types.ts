import { type } from "os";

export interface Films {
  dates?: Dates;
  page: number;
  results: MovieI[];
  total_pages: number;
  total_results: number;
}

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface MovieI {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum OriginalLanguage {
  En = "en",
  Es = "es",
  Fi = "fi",
  Ru = "ru",
}
export type Param = "upcoming" | "popular" | string;

/* export type Param = ParamEnum | string;

export enum ParamEnum {
  Up = ,
  Pop = ,
}
 */
/* export interface Id extends Param {
  id: string;
}
 */
export interface MovieDetailI extends MovieI {
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  production_companies: ProductionCompany[];
  production_countries: any[];
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
