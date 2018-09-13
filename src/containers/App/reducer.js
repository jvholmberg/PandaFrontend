export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

const initialState = {
  activated: false,
  email: null,
  password: null,
  firstName: null,
  lastName: null,
  role: null,
  language: null,
  groups: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.data;
    case USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
};
