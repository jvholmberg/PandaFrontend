import React from 'react';
import './AppBar.css';

const AppBar = ({ children, collapsed }) => (
  <nav className='AppBar'>
    <div className='AppBar-Container'>
      <button type='button' aria-label='Open drawer'>
        <i className="fas fa-bars"></i>
      </button>
      <div className={`AppBar-Links ${collapsed ? 'collapsed' : ''}`.trim()}>
        {children}
      </div>
      <button type='button' aria-label='Go to settings'>
        <i className="fas fa-cog"></i>
      </button>
    </div>
  </nav>
);

export default AppBar;