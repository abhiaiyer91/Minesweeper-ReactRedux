import Store from '/imports/client/store/store';
import { gameStatusType } from '/imports/client/constants/actionTypes';

export default function gameOver() {
  return Store.dispatch({
    type: gameStatusType.OVER.value
  });
}
