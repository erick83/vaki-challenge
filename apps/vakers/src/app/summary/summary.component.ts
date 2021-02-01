import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import { VakiReward } from '../model/vaki-reward.interface'
import { Vaki } from '../model/vaki.interface';

import { FirestoreService } from '../services/firestore.service';
import { getVakis, getRewards } from '../vaki.actions'

@Component({
  selector: 'vaki-challenge-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  $vakis: Observable<Vaki[]>;
  $vkRewards: Observable<VakiReward[]>;
  loading: string[] = []

  constructor(private firestore: FirestoreService, private store: Store<{ vaki: Vaki[], reward: VakiReward[] }>) {}

  ngOnInit() {
    this.store.dispatch(getVakis())
    this.store.dispatch(getRewards())
    this.$vakis = this.store.select('vaki')
    this.$vkRewards = this.store.select('reward')
  }

  addReward({value, key}) {
    this.loading.push(key)
    this.firestore.addToCart(value).subscribe(() => {
      this.loading.splice(this.loading.indexOf(key))
    })
  }

}
