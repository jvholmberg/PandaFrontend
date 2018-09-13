import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { ConnectedRouter as Router } from 'react-router-redux';
import { connect } from 'react-redux';
import './App.css'

import { mapStateToProps, mapDispatchToProps } from './selector';
import Landing from '../Landing';
import Navigation from '../Navigation';
import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register';
import NotFound from '../NotFound';

class App extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {
    const { history } = this.props;
    return (
      <Router history={history}>
        <div className='cont-app'>
          <Navigation />
          <div className='app'>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
