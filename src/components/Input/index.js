import React from 'react';

const Input = ({ label, className, props}) => (
  <div className={className}>
    <label>
      {label}
      <input className='form-control' {...props} />
    </label>
  </div>
);
export default Input;
