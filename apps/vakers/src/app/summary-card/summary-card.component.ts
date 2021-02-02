import { Component, Input } from '@angular/core';
import { Vaki } from '../model/vaki.interface';

@Component({
  selector: 'vaki-challenge-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss']
})
export class SummaryCardComponent {
  selected = 'USD';

  @Input() vaki: Vaki[]

  getDifferenceOfDays() {
    return Math.floor((this.vaki[0].close_date - Date.now()) / (1000*60*60*24))
  }
}
