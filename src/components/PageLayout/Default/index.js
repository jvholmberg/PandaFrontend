import React from 'react';

import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';

const PageLayout = (props) => (
  <div>
    <DesktopLayout {...props} />
    {/* <MobileLayout {...props} /> */}
  </div>
);
export default PageLayout;
