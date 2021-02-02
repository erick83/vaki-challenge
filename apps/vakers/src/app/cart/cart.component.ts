import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';

import { getRewards, addItemCart, removeItemCart, clearCart } from '../vaki.actions'
import { VakiReward } from '../model/vaki-reward.interface'
import { Cart } from '../model/cart.interface';

@Component({
  selector: 'vaki-challenge-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  $vkRewards: Observable<VakiReward[]>;
  $cart: Observable<Cart[]>;

  rewards: VakiReward[];
  total = 0;

  constructor(private store: Store<{ cart: Cart[], reward: VakiReward[] }>) { }

  ngOnInit(): void {
    this.store.dispatch(getRewards());
    this.$vkRewards = this.store.select('reward');
    this.$cart = this.store.select('cart');

    this.$vkRewards.subscribe(rewards => {
      this.rewards = rewards;
    });

    this.$cart.subscribe(carts => {
      this.total = 0
      carts.forEach(cart => {
        this.total+= this.getValue(cart.reward_key) * cart.cant
      })
    })
  }

  getRewardData(key) {
    return this.rewards.find(i => i.key === key)
  }

  getValue(key) {
    return parseFloat(this.getRewardData(key)?.value)
  }

  addItemCart(key) {
    this.store.dispatch(addItemCart({ key }))
  }

  removeItemCart(key) {
    this.store.dispatch(removeItemCart({ key }))
  }

  clearCart(key) {
    this.store.dispatch(clearCart({ key }))
  }

}
