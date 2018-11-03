import React, { Component } from 'react';
import { Switch, Route, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css'

import { mapStateToProps, mapDispatchToProps } from './selector';
import Contact from '../Contact';
import Dashboard from '../Dashboard';
import Landing from '../Landing';
import Login from '../Login';
import Register from '../Register';

import NotFound from '../../components/NotFound';

import Header from '../../components/Header';
import AppBar from '../../components/AppBar';


class App extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {
    return (
      <div style={{ height: '200vh' }}>
        <Header />
        <AppBar>
          <NavLink exact to='/' >Home</NavLink>
          <NavLink to='/dashboard' >Dashboard</NavLink>
          <NavLink to='/login' >Login</NavLink>
          <NavLink to='/register' >Register</NavLink>
        </AppBar>
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
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
