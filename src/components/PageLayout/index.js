import React from 'react';
import { Responsive, Visibility } from 'semantic-ui-react';
import Navigation from '../Navigation';

const PageLayout = ({
  showFixedNavigation,
  hideFixedNavigation,
  fixed,
  header: Component,
  children,
}) => (
  <Responsive minWidth={Responsive.onlyTablet.minWidth}>
    {console.log(children)}
    <Visibility
      once={false}
      onBottomPassed={showFixedNavigation}
      onBottomPassedReverse={hideFixedNavigation}>
      {/* <Component>
        <Navigation fixed={fixed} />
      </Component> */}
    </Visibility>
    {children}
  </Responsive>
);
export default PageLayout;
