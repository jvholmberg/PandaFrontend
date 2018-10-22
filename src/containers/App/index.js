import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router';
import { connect } from 'react-redux';
import './App.css'

import { mapStateToProps, mapDispatchToProps } from './selector';
import Contact from '../Contact';
import Dashboard from '../Dashboard';
import Landing from '../Landing';
import Login from '../Login';
import Register from '../Register';

import NotFound from '../../components/NotFound';

class App extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {
    return (
      <Switch>
        {/* Unrestricted routes */}
        <Route exact path='/' component={Landing} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/contact' component={Contact} />

        {/* Restricted routes */}
        <Route path='/dashboard' component={Dashboard} />

        {/* No matching route found */}
        <Route component={NotFound} />
      </Switch>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
