import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, Container, Button } from 'semantic-ui-react';

const DesktopNavigation = ({ fixed }) => (
  <Menu
    borderless
    stackable
    size='large'
    fixed={fixed ? 'top' : null}
    inverted={!fixed}
    pointing={!fixed}
    secondary={!fixed}>
    <Container>
      <Menu.Menu position='left'>
        <Menu.Item exact to='/' as={NavLink}>Home</Menu.Item>
        <Menu.Item to='/dashboard' as={NavLink}>Dashboard</Menu.Item>
        <Menu.Item to='/contact' as={NavLink}>Contact</Menu.Item>
      </Menu.Menu>
      <Menu.Menu position='right'>
        <Menu.Item to='/login' as={Link}>
          <Button inverted={!fixed}>
            Login
          </Button>
        </Menu.Item>
        <Menu.Item to='/register' as={Link}>
          <Button inverted={!fixed} primary={fixed}>
            Register
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);
export default DesktopNavigation;
