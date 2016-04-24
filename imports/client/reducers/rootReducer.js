import { combineReducers } from 'redux';
import incrementReducer from '/imports/client/reducers/incrementReducer';
import gameStatus from '/imports/client/reducers/gameStatus';
import gameStatistics from '/imports/client/reducers/gameStats';
import flagNumbers from '/imports/client/reducers/flagNumbers';

const rootReducer = combineReducers({
  gameStatus,
  openTiles: incrementReducer("OPEN_TILES"),
  gameTime: incrementReducer("TIME"),
  flagNumbers,
  gameStatistics
});

export default rootReducer;
