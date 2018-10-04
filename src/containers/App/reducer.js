export const SET_NAVIGATION_FIXED = 'SET_NAVIGATION_FIXED';
export const SET_SIDEBAR_OPEN = 'SET_SIDEBAR_OPEN';

const initialState = {
  fixed: false,
  open: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NAVIGATION_FIXED: {
      return { ...state, fixed: action.data };
    }
    case SET_SIDEBAR_OPEN: {
      return { ...state, open: action.data };
    }
    default: {
      return state;
    }
  }
};

export const hideFixedNavigation = () => ({ type: SET_NAVIGATION_FIXED, data: false });
export const showFixedNavigation = () => ({ type: SET_NAVIGATION_FIXED, data: true });

export const toggleSidebar = (open) => ({ type: SET_SIDEBAR_OPEN, data: open });
export const closeSidebar = () => ({ type: SET_SIDEBAR_OPEN, data: false });
