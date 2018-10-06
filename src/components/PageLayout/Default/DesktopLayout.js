import React from 'react';
import { Responsive, Visibility, Segment, Menu, Container } from 'semantic-ui-react';

import { DesktopNavigation as Navigation } from '../../Navigation';

const DesktopLayout = ({
  children,
  className,
  heading: Heading,
  fixed,
  showFixedNavigation,
  hideFixedNavigation,
}) => (
  <Responsive minWidth={Responsive.onlyTablet.minWidth}>
    <Visibility
      once={false}
      onBottomPassed={showFixedNavigation}
      onBottomPassedReverse={hideFixedNavigation}>
      <Segment
        className={className}
        textAlign='center'
        vertical>
        <Navigation fixed={fixed} />
        <Heading />
      </Segment>
    </Visibility>
    {children}
  </Responsive>
);
export default DesktopLayout;
