import { Component, Input, Output, EventEmitter } from '@angular/core';
import { VakiReward } from '../model/vaki-reward.interface';

@Component({
  selector: 'vaki-challenge-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class RewardsComponent {
  @Input() reward: VakiReward;
  @Input() loading: string[];
  @Output() rewardSelectedEvent = new EventEmitter<{ value: string, key: string }>();

  addReward(value: string) {
    this.rewardSelectedEvent.emit({value, key: this.reward.key})
  }

  isLoading() {
    console.log(this.loading.includes(this.reward.key))
    return this.loading.includes(this.reward.key)
  }
}
