import React from 'react';
import { Responsive, Sidebar, Segment, Menu, Container, Icon, Button } from 'semantic-ui-react';

import Navigation from '../../Navigation';

const MobileLayout = ({ children, open, toggleSidebar, closeSidebar }) => (
  <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
    <Sidebar.Pushable>
      <Sidebar as={Menu} animation='uncover' inverted vertical visible={open}>
        <Navigation />
      </Sidebar>
      <Sidebar.Pusher
        dimmed={open}
        onClick={closeSidebar}
        style={{ minHeight: '100vh' }}>
        <Segment
          inverted
          textAlign='center'
          style={{ minHeight: 350, padding: '1em 0em' }}
          vertical>
          <Container>
            <Menu inverted pointing secondary size='large'>
              <Menu.Item onClick={toggleSidebar}>
                <Icon name='sidebar' />
              </Menu.Item>
            </Menu>
          </Container>
        </Segment>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  </Responsive>
);
export default MobileLayout;
