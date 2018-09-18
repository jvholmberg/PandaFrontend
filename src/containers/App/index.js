import React, { Component } from 'react';
import { Switch } from 'react-router';
import { ConnectedRouter as Router } from 'react-router-redux';
import { connect } from 'react-redux';
import './App.css'

import { mapStateToProps, mapDispatchToProps } from './selector';
import { RestrictedRoute } from '../../components';
import Landing from '../Landing';
import Navigation from '../Navigation';
import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register';
import Error from '../Error';

class App extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {
    const { history, app } = this.props;
    return (
      <Router history={history}>
        <div className='cont-app'>
          <Navigation />
          <div className='app'>
            <Switch>
              <RestrictedRoute
                exact path='/'
                component={Landing} />
              <RestrictedRoute
                path='/dashboard'
                component={Dashboard}
                requiredRoles={['admin', 'user']} />
              <RestrictedRoute
                path='/login'
                component={Login} />
              <RestrictedRoute
                path='/register'
                component={Register} />
              <RestrictedRoute
                component={Error} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
