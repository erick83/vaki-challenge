import { Component, OnInit } from '@angular/core';
import { VakiReward } from '../model/vaki-reward.interface'

@Component({
  selector: 'vaki-challenge-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  rewards: VakiReward[] = [
    {
      title: 'Titulo de la Recompenza',
      description: 'Descriptcion',
      visible: true,
      img: '',
      key: '',
      value: '25545254',
      delivery_date: 5,
      claimed: 3,
      quantityAvailable: 2,
    },
    {
      title: 'Titulo de la Recompenza',
      description: 'Descriptcion',
      visible: true,
      img: '',
      key: '',
      value: '25545254',
      delivery_date: 5,
      claimed: 3,
      quantityAvailable: 2,
    },
    {
      title: 'Titulo de la Recompenza',
      description: 'Descriptcion',
      visible: true,
      img: '',
      key: '',
      value: '25545254',
      delivery_date: 5,
      claimed: 3,
      quantityAvailable: 2,
    },
    {
      title: 'Titulo de la Recompenza',
      description: 'Descriptcion',
      visible: true,
      img: '',
      key: '',
      value: '25545254',
      delivery_date: 5,
      claimed: 3,
      quantityAvailable: 2,
    },
    {
      title: 'Titulo de la Recompenza',
      description: 'Descriptcion',
      visible: true,
      img: '',
      key: '',
      value: '25545254',
      delivery_date: 5,
      claimed: 3,
      quantityAvailable: 2,
    },
    {
      title: 'Titulo de la Recompenza',
      description: 'Descriptcion',
      visible: true,
      img: '',
      key: '',
      value: '25545254',
      delivery_date: 5,
      claimed: 3,
      quantityAvailable: 2,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
