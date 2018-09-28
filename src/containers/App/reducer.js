export const SET_NAVIGATION_FIXED = 'SET_NAVIGATION_FIXED';

const initialState = {
  fixed: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NAVIGATION_FIXED: {
      return { ...state, fixed: action.data };
    }
    default: {
      return state;
    }
  }
};

export const hideFixedNavigation = () => ({ type: SET_NAVIGATION_FIXED, data: false });
export const showFixedNavigation = () => ({ type: SET_NAVIGATION_FIXED, data: true });
