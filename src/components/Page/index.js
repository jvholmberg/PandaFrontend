import React from 'react';
import './Page.css';

const Page = ({ icon, title, children }) => (
  <div className='Page'>
    <div className='Page-Header container'>
      <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-12'>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
    <div className='Page-content container'>
      {children}
    </div>
  </div>
);
export default Page;
