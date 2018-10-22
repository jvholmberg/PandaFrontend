import React from 'react';
import { Responsive, Visibility, Segment } from 'semantic-ui-react';

import './DesktopLayout.css';
import { DesktopNavigation as Navigation } from '../../Navigation';

const DesktopLayout = ({
  children,
  className = '',
  heading: Heading,
  fixed,
  showFixedNavigation,
  hideFixedNavigation,
}) => (
  <Responsive
    className='DesktopLayout-Default'
    minWidth={Responsive.onlyTablet.minWidth}>
    <Visibility
      once={false}
      onBottomPassed={showFixedNavigation}
      onBottomPassedReverse={hideFixedNavigation}>
      <Segment
        className={className}
        textAlign='center'
        vertical
        inverted>
        <Navigation fixed={fixed} />
        <Heading />
      </Segment>
    </Visibility>
    {children}
  </Responsive>
);
export default DesktopLayout;
