import Store from '/imports/client/store/store';
import { gameTimeType, gameStatusType } from '/imports/client/constants/actionTypes';

export default function tickTime(openTiles, gameStatus) {
  if (openTiles > 0 && gameStatus === gameStatusType.PLAYING.label) {
    return Store.dispatch({
      type: gameTimeType.UPDATE
    });
  }
}
