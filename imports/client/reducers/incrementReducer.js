const INITIAL_TIME = 0;
export default function incrementer(featureName) {
  return function incrementReducer(state = INITIAL_TIME, action = {}) {
    switch (action.type) {
      case `UPDATE_${featureName}`:
        return state + 1;
      case `RESET_${featureName}`:
        return INITIAL_TIME;
      default:
        return state;
    }
  }
}
