import { createAction, props } from '@ngrx/store';
import { Vaki } from './model/vaki.interface'
import { VakiReward } from './model/vaki-reward.interface';

export const getVakis = createAction('[Vaki Summary] Get Data');
export const storeVaki = createAction('[Vaki Summary] Store Data', props<{ payload: Vaki[] }>());

export const getRewards = createAction('[Vaki Summary] Get Rewards');
export const storeRewards = createAction('[Vaki Summary] Store Rewards', props<{ payload: VakiReward[] }>());

export const addReward = createAction('[Vaki Summary] Add Reward', props<{ key: string }>());
export const removeReward = createAction('[Vaki Summary] Add Reward', props<{ key: string }>());
