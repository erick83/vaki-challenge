import { createReducer, on } from '@ngrx/store';
import { Cart } from './model/cart.interface';
import { VakiReward } from './model/vaki-reward.interface';
import { Vaki } from './model/vaki.interface';

import { storeVaki, storeRewards, addItemCart, removeItemCart, clearCart } from './vaki.actions';


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
  on(addItemCart, (state, action) => {
    let updated = false;
    const newState = state.map(item => {
      if (item.reward_key === action.key) {
        updated = true;
        return {
          reward_key: item.reward_key,
          cant: item.cant + 1
        }
      }

      return item;
    })

    if (!updated) {
      newState.push({ reward_key: action.key, cant: 1 });
    }

    return newState;
  }),

  on(removeItemCart, (state, action) => {
    const newState = []

    for (const item of state) {
      if (item.reward_key === action.key) {
        if (item.cant > 1) {
          newState.push({
            reward_key: item.reward_key,
            cant: item.cant - 1
          })
        }
      } else {
        newState.push(item)
      }
    }

    return newState;
  }),

  on(clearCart, (state, action) => {
    const newState = state.filter(item => (item.reward_key !== action.key))
    return newState;
  }),
);

export function vakiCartReducer(state, action) {
  return _vakiCartReducer(state, action);
}
