import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Cart } from '../model/cart.interface';

import { VakiReward } from '../model/vaki-reward.interface'
import { Vaki } from '../model/vaki.interface';
import { getVakis, getRewards, addItemCart } from '../vaki.actions'

@Component({
  selector: 'vaki-challenge-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnDestroy {
  $vakis: Observable<Vaki[]>;
  $vkRewards: Observable<VakiReward[]>;
  $carts: Observable<Cart[]>;
  carts: Cart[];
  unsubscribe$ = new Subject<void>();

  constructor(private store: Store<{ vaki: Vaki[], reward: VakiReward[], cart: Cart[] }>) {}

  ngOnInit() {
    this.store.dispatch(getVakis());
    this.store.dispatch(getRewards());
    this.$vakis = this.store.select('vaki');
    this.$vkRewards = this.store.select('reward');
    this.$carts = this.store.select('cart')

    this.$carts
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(i => {
        this.carts = i
      })
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  addReward({ key }) {
    this.store.dispatch(addItemCart({ key }))
  }

  getCardCant(key): Cart {
    const resp = this.carts.find(i => i.reward_key === key)
    return resp || null
  }
}
