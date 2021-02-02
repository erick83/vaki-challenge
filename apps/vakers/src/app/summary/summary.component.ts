import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import { Cart } from '../model/cart.interface';

import { VakiReward } from '../model/vaki-reward.interface'
import { Vaki } from '../model/vaki.interface';
import { getVakis, getRewards, addItemCart } from '../vaki.actions'

@Component({
  selector: 'vaki-challenge-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  $vakis: Observable<Vaki[]>;
  $vkRewards: Observable<VakiReward[]>;
  $carts: Observable<Cart[]>;
  carts: Cart[];

  constructor(private store: Store<{ vaki: Vaki[], reward: VakiReward[], cart: Cart[] }>) {}

  ngOnInit() {
    this.store.dispatch(getVakis());
    this.store.dispatch(getRewards());
    this.$vakis = this.store.select('vaki');
    this.$vkRewards = this.store.select('reward');
    this.$carts = this.store.select('cart')

    this.$carts.subscribe(i => {
      this.carts = i
    })
  }

  addReward({ key }) {
    this.store.dispatch(addItemCart({ key }))
  }

  getCardCant(key): Cart {
    const resp = this.carts.find(i => i.reward_key === key)
    return resp || null
  }
}
