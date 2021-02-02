import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable, Subject } from 'rxjs';

import { getRewards, addItemCart, removeItemCart, clearCart } from '../vaki.actions'
import { VakiReward } from '../model/vaki-reward.interface'
import { Cart } from '../model/cart.interface';
import { FirestoreService } from '../services/firestore.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'vaki-challenge-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  $vkRewards: Observable<VakiReward[]>;
  $cart: Observable<Cart[]>;
  unsubscribe$ = new Subject<void>();

  rewards: VakiReward[];
  carts: Cart[];
  total = 0;
  showSuccessAlert = false;
  showLoader = false;

  constructor(
    private firestore: FirestoreService,
    private store: Store<{ cart: Cart[], reward: VakiReward[] }>,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getRewards());
    this.$vkRewards = this.store.select('reward');
    this.$cart = this.store.select('cart');

    this.$vkRewards
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(rewards => {
        this.rewards = rewards;
      });

    this.$cart.subscribe(carts => {
      this.total = 0;
      this.carts = carts;
      carts.forEach(cart => {
        this.total+= this.getValue(cart.reward_key) * cart.cant
      });
    })
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
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

  disableAdd(cart: Cart) {
    return this.rewards.find(i => i.key === cart.reward_key).quantityAvailable - (cart && cart.cant) === 0;
  }

  removeItemCart(key) {
    this.store.dispatch(removeItemCart({ key }))
  }

  clearCart(key) {
    this.store.dispatch(clearCart({ key }))
  }

  purchase() {
    this.showLoader = true;
    this.firestore.purchase(this.carts)
      .subscribe(response => {
        if (response.status === 201) {
          for (const cart of this.carts) {
            this.clearCart(cart.reward_key)
          }

          this.showSuccessAlert = true

          setTimeout(() => {
            this.showSuccessAlert = false;
            this.router.navigate(['summary']);
          }, 3000);
        }
      })
  }
}
