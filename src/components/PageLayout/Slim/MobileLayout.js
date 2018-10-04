import React from 'react';
import { Responsive, Sidebar, Segment, Menu, Container, Icon, Button } from 'semantic-ui-react';

const MobileLayout = ({ children, open, toggleSidebar, closeSidebar }) => (
  <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
  </Responsive>
);
export default MobileLayout;
