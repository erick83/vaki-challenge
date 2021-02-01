import { Component, Input } from '@angular/core';
import { Vaki } from '../model/vaki.interface';

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
    country: 'Col',
  }

  selected = 'USD';

  @Input() vaki: Vaki[]
}
