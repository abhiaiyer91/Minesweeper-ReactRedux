import Store from '/imports/client/store/store';
import { gameStats } from '/imports/client/constants/actionTypes';

export function setEasy() {
  return Store.dispatch({
    type: gameStats.EASY.value
  });
}

export function setNormal() {
  return Store.dispatch({
    type: gameStats.NORMAL.value
  });
}

export function setHard() {
  return Store.dispatch({
    type: gameStats.HARD.value
  });
}
