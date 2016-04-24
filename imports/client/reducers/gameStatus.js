import * as types from '/imports/client/constants/actionTypes.js';
const { PLAYING, OVER, CLEARED } = types.gameStatusType;

export default function gameStatus(state = PLAYING.label, action) {
  switch (action.type) {
    case PLAYING.value:
      return PLAYING.label;
    case OVER.value:
      return OVER.label;
    case CLEARED.value:
      return CLEARED.label;
    default:
      return state;
  }
}
