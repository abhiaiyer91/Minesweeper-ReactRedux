import Store from '/imports/client/store/store';
import { gameStatusType } from '/imports/client/constants/actionTypes';

export default function judge(gameStatistics, openTiles) {
  const { mineNum, rowNum, colNum } = gameStatistics;
  if (mineNum + openTiles >= rowNum * colNum) {
    return Store.dispatch({
      type: gameStatusType.CLEARED.value
    });
  }
}
