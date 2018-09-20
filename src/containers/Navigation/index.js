import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Navigation.css';

import { mapStateToProps, mapDispatchToProps } from './selector';
import AppBar from '../../components/AppBar';
import Breadcrumb from '../../components/Breadcrumb';

class Navigation extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className='cont-navigation'>
        <AppBar>
          <NavLink activeClassName='active' exact to='/'>Home</NavLink>
          <NavLink activeClassName='active' to='/dashboard'>Dashboard</NavLink>
          <NavLink activeClassName='active' to='/login'>Login</NavLink>
          <NavLink activeClassName='active' to='/register'>Register</NavLink>
        </AppBar>
        <Breadcrumb path='/a/b/c' />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));
