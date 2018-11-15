import { FETCH_USER, FETCH_SESSIONS } from '../../actions';

const defaultState = {

};

export default (state = defaultState, { type, data }) => {
  switch (type) {
    case FETCH_USER:

      break;
    case FETCH_SESSIONS:

      break;
    default:
      return state;
  }
};

