import React from 'react';
import { Responsive, Visibility, Segment, Menu, Container } from 'semantic-ui-react';

const DesktopLayout = ({ children, fixed, showFixedNavigation, hideFixedNavigation }) => (
  <Responsive minWidth={Responsive.onlyTablet.minWidth}>
  </Responsive>
);
export default DesktopLayout;
