import * as types from '/imports/client/constants/actionTypes.js';
const { EASY, NORMAL, HARD } = types.gameStats;

const defaultStat = {
  level: EASY.label,
  mineNum: 10,
  rowNum: 9,
  colNum: 9
};

export default function gameStatistics(state, action) {
  switch (action.type) {
    case EASY.value:
      return defaultStat;
    case NORMAL.value:
      return {
        level: NORMAL.label,
        mineNum: 40,
        rowNum: 16,
        colNum: 16
      };
    case HARD.value:
      return {
        level: HARD.label,
        mineNum: 100,
        rowNum: 16,
        colNum: 30
      };
    default:
      return defaultStat;
  }
}
