import React from 'react';
import { Responsive, Visibility, Segment, Menu, Container } from 'semantic-ui-react';

import { DesktopNavigation as Navigation } from '../../Navigation';

const DesktopLayout = ({
  children,
  heading: Heading,
  fixed,
  showFixedNavigation,
  hideFixedNavigation
}) => (
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
        <Navigation fixed={fixed} />
        <Heading />
      </Segment>
    </Visibility>
    {children}
  </Responsive>
);
export default DesktopLayout;
