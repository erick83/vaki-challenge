export interface Vaki {
  name: string;
  description: string;
  start_date: number;
  close_date: number;
  summary: string;
  url: string;
  photo?: string;
  video?: string;
  country: Country['isoCode'];
}

export interface Country {
  ['isoCode']: string
}
