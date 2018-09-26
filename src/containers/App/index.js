import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';
import './App.css'

import { mapStateToProps, mapDispatchToProps } from './selector';
import Landing from '../Landing';
import Navigation from '../Navigation';
import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register';
import Error from '../Error';
import NotFound from '../../components/NotFound';

class App extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {
    return (
        <div className='app'>
          <Navigation />
          <Switch>
            <Route
              exact path='/'
              component={Landing} />
            <Route
              path='/dashboard'
              component={Dashboard} />
            <Route
              path='/login'
              component={Login} />
            <Route
              path='/register'
              component={Register} />
            <Route
              component={NotFound} />
          </Switch>
        </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
