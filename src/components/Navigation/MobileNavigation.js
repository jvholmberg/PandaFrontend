import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sidebar, Menu } from 'semantic-ui-react';

const MobileNavigation = ({ open }) => (
  <Sidebar as={Menu} animation='push' vertical visible={open}>
    <Menu.Item exact to='/' as={NavLink}>Home</Menu.Item>
    <Menu.Item to='/dashboard' as={NavLink}>Dashboard</Menu.Item>
    <Menu.Item to='/login' as={NavLink}>Login</Menu.Item>
    <Menu.Item to='/register' as={NavLink}>Register</Menu.Item>
  </Sidebar>
);
export default MobileNavigation;
