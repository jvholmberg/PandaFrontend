import React from 'react';
const Input = ({ label, className, input, meta: { touched, error }, ...props }) => (
  <div className={className}>
    <label>
      {label}
      <input className='form-control' {...input} {...props} />
    </label>
  </div>
);
export default Input;
