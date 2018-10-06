import React from 'react';
import { Responsive, Sidebar, Segment, Menu, Container, Icon, Button } from 'semantic-ui-react';

import { MobileNavigation as Navigation } from '../../Navigation';

const MobileLayout = ({
  children,
  heading: Heading,
  open,
  toggleSidebar,
  closeSidebar
}) => (
  <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
    <Sidebar.Pushable>
      <Navigation open={open} />
      <Sidebar.Pusher
        dimmed={open}
        onClick={(e) => {
          e.stopPropagation();
          closeSidebar();
        }}
        style={{ minHeight: '100vh' }}>
        <Segment inverted textAlign='center' vertical>
          <Container>
            <Menu inverted pointing secondary size='large'>
              <Menu.Item onClick={(e) => {
                e.stopPropagation();
                toggleSidebar(!open)
              }}>
                <Icon name='sidebar' />
              </Menu.Item>
              <Menu.Item position='right'>
                <Button as='a' inverted>
                  Log in
                </Button>
                <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                  Sign Up
                </Button>
              </Menu.Item>
            </Menu>
          </Container>
          <Heading />
        </Segment>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  </Responsive>
);
export default MobileLayout;
