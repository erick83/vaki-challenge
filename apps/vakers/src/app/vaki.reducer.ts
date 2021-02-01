import { createReducer, on } from '@ngrx/store';
import { Cart } from './model/cart.interface';
import { VakiReward } from './model/vaki-reward.interface';
import { Vaki } from './model/vaki.interface';

import { storeVaki, storeRewards, storeCart } from './vaki.actions';


export const initialVakiState: Vaki[] = [];
const _vakiReducer = createReducer(
  initialVakiState,
  on(storeVaki, (state, action) => {
    return action.payload
  }),
);
export function vakiReducer(state, action) {
  return _vakiReducer(state, action);
}


export const initialRewardReducer: VakiReward[] = []
const _vakiRewardReducer = createReducer(
  initialRewardReducer,
  on(storeRewards, (state, action) => {
    return action.payload
  }),
);
export function vakiRewardReducer(state, action) {
  return _vakiRewardReducer(state, action);
}

export const initialCartReducer: Cart[] = []
const _vakiCartReducer = createReducer(
  initialCartReducer,
  on(storeCart, (state, action) => {
    return action.payload
  }),
);
export function vakiCartReducer(state, action) {
  return _vakiCartReducer(state, action);
}
