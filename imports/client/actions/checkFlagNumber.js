import Store from '/imports/client/store/store';
import { flagActions } from '/imports/client/constants/actionTypes';

export default function checkFlag(num) {
  Store.dispatch({
    type: flagActions.UPDATE,
    data: num || 0
  });
}
