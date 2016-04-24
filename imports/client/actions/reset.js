import Store from '/imports/client/store/store';
import { openTiles, flagActions, gameTimeType } from '/imports/client/constants/actionTypes';

export default function resetGame() {
  Store.dispatch({
    type: openTiles.RESET
  });
  Store.dispatch({
    type: flagActions.RESET
  });
  return Store.dispatch({
    type: gameTimeType.RESET
  });
}
