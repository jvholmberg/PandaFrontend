import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import createHistory from "history/createBrowserHistory";

import { reducer as formReducer } from 'redux-form';
import appReducer from './containers/App/reducer';
import landingReducer from './containers/Landing/reducer';
import dashboardReducer from './containers/Dashboard/reducer';
import loginReducer from './containers/Login/reducer';
import registerReducer from './containers/Register/reducer';

const history = createHistory();
const middlewares = [
  thunkMiddleware,
  routerMiddleware(history),
];

const store = createStore(
  combineReducers({
    routing: routerReducer,
    form: formReducer,
    app: appReducer,
    landing: landingReducer,
    dashboard: dashboardReducer,
    login: loginReducer,
    register: registerReducer,
  }),
  composeWithDevTools(
    applyMiddleware(...middlewares)
  ));

export default store;
export { history };
