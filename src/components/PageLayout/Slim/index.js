import React from 'react';

import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';

const PageLayout = ({ children }) => (
  <div>
    <DesktopLayout>{children}</DesktopLayout>
    <MobileLayout>{children}</MobileLayout>
  </div>
);
export default PageLayout;
