import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Menu, Container } from 'semantic-ui-react';
import './Navigation.css';

import { mapStateToProps, mapDispatchToProps } from './selector';

class Navigation extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {
    return (
      <Menu
        borderless
        stackable
        size='large'
        fixed='top'>
        <Container>
          <Menu.Menu position='left'>
            <Menu.Item exact to='/' as={NavLink}>Home</Menu.Item>
            <Menu.Item to='/dashboard' as={NavLink}>Dashboard</Menu.Item>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item to='/login' as={NavLink}>Login</Menu.Item>
            <Menu.Item to='/register' as={NavLink}>Register</Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));
