export interface MovieI {
  mal_id?: number;
  url?: string;
  images: { [key: string]: Image };
  approved?: boolean;
  titles?: Title[];
  title?: string;
  title_english?: null;
  title_japanese?: string;
  title_synonyms?: string[];
  type?: string;
  chapters?: number;
  volumes?: number;
  status?: string;
  publishing?: boolean;
  published?: Published;
  score?: null;
  scored?: null;
  scored_by?: null;
  rank?: null;
  popularity?: number;
  members?: number;
  favorites?: number;
  synopsis?: string;
  background?: null;
  authors?: Author[];
  serializations?: Author[];
  genres?: Author[];
  explicit_genres?: any[];
  themes?: any[];
  demographics?: any[];
}

export interface Author {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Image {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Published {
  from: Date;
  to: Date;
  prop: Prop;
  string: string;
}

export interface Prop {
  from: From;
  to: From;
}

export interface From {
  day: number;
  month: number;
  year: number;
}

export interface Title {
  type: Type;
  title: string;
}

export enum Type {
  Default = 'Default',
  Japanese = 'Japanese',
  Synonym = 'Synonym',
}
