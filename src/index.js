import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

import App from './containers/App';
import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Provider store={store}>
    <App history={history} />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
