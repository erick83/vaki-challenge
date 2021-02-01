import { Component } from '@angular/core';

export interface Vaki {
  description: string;
  start_date: number;
  close_date: number;
  name: string;
  summary: string;
  url: string;
  photo?: string;
  video?: string;
  country: Country['isoCode'];
}

export interface Country {
  isoCode: [string]
}

@Component({
  selector: 'vaki-challenge-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss']
})
export class SummaryCardComponent {
  data: Vaki = {
    description: '',
    start_date: 15,
    close_date: 25,
    name: 'Campaña de esterilización GRATUITA en Bahia Solano',
    summary: '',
    url: '\\assets\\images\\item\\1.png',
    country: ['Col'],
  }

  selected = 'USD';
}
