import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router';
import { connect } from 'react-redux';
import './App.css'

import { mapStateToProps, mapDispatchToProps } from './selector';
import PageLayout from '../../components/PageLayout'

import Landing from '../Landing';
import Navigation from '../../components/Navigation';
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
    const { fixed, showFixedNavigation, hideFixedNavigation } = this.props;
    return (
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route component={Error} />
      </Switch>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
