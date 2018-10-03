import React from 'react';
import { Responsive, Visibility, Segment, Menu, Container } from 'semantic-ui-react';

import Navigation from '../../Navigation';

const DesktopLayout = ({ children, fixed, showFixedNavigation, hideFixedNavigation }) => (
  <Responsive minWidth={Responsive.onlyTablet.minWidth}>
    <Visibility
      once={false}
      onBottomPassed={showFixedNavigation}
      onBottomPassedReverse={hideFixedNavigation}>
      <Segment
        inverted
        textAlign='center'
        style={{ minHeight: 700, padding: '1em 0em' }}
        vertical>
        <Menu
          fixed={fixed ? 'top' : null}
          inverted={!fixed}
          pointing={!fixed}
          secondary={!fixed}
          size='large'>
          <Container>
            <Navigation />
          </Container>
        </Menu>
      </Segment>
    </Visibility>
    {children}
  </Responsive>
);
export default DesktopLayout;
