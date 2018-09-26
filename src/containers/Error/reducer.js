import _ from 'lodash';

export const ADD_ERROR = 'ADD_ERROR';
export const GO_TO_ERROR = 'GO_TO_ERROR';
export const PREV_ERROR = 'PREV_ERROR';
export const NEXT_ERROR = 'NEXT_ERROR';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const initialState = {
  current: 0,
  all: [
    {
      status: '400',
      message: 'something',
      stacktrace: 'none',
    }, {
      status: '500',
      message: 'something',
      stacktrace: 'none',
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ERROR: {
      const arr = _.get(state, 'all', []);
      arr.push(action.data);
      return { ...state, all: arr };
    }
    case GO_TO_ERROR: {
      const arr = _.get(state, 'all', []);
      const oob = action.data >= arr.length;
      const neg = action.data < 0;
      if (oob) { return { ...state, current: arr.length - 1}; }
      if (neg) { return { ...state, current: 0 }; }
      return { ...state, current: action.data - 1 };
    }
    case PREV_ERROR: {
      const cur = _.get(state, 'current', 0);
      const oob = cur === 0;
      const pre = oob ? 0 : cur - 1;
      return { ...state, current: pre };
    }
    case NEXT_ERROR: {
      const arr = _.get(state, 'all', []);
      const cur = _.get(state, 'current', 0);
      const oob = cur >= arr.length;
      const nxt = oob ? --arr.length : cur + 1;
      return { ...state, current: nxt };
    }
    case CLEAR_ERRORS: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export const goToError = (index) => ({ type: GO_TO_ERROR, data: index });
export const goToPrevError = () => ({ type: PREV_ERROR });
export const goToNextError = () => ({ type: NEXT_ERROR });
export const clearErrors = () => ({ type: CLEAR_ERRORS });
