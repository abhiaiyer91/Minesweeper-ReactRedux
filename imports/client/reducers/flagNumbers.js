import * as types from '/imports/client/constants/actionTypes.js';
const { UPDATE, RESET } = types.flagActions;
const INITIAL_FLAG_COUNT = 0;

export default function flagNumbers(state = INITIAL_FLAG_COUNT, action) {
  switch (action.type) {
    case UPDATE:
      return state + action.data;
    case RESET:
      return INITIAL_FLAG_COUNT;
    default:
      return state;
  }
}
