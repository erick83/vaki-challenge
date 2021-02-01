import { Component, Input, Output, EventEmitter } from '@angular/core';
import { VakiReward } from '../model/vaki-reward.interface';

@Component({
  selector: 'vaki-challenge-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class RewardsComponent {
  @Input() reward: VakiReward;
  @Output() rewardSelectedEvent = new EventEmitter<string>();

  addReward(value: string) {
    this.rewardSelectedEvent.emit(value)
  }
}
