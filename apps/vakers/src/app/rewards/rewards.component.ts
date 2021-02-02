import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cart } from '../model/cart.interface';
import { VakiReward } from '../model/vaki-reward.interface';

@Component({
  selector: 'vaki-challenge-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class RewardsComponent {
  @Input() reward: VakiReward;
  @Input() cart: Cart;
  @Output() rewardSelectedEvent = new EventEmitter<{ key: string }>();

  addReward() {
    this.rewardSelectedEvent.emit({key: this.reward.key})
  }
}
