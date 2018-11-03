import React from 'react';
import './Button.css';

const Button = ({ className, btnType, btnSize, ...props }) => (
  <button className={`btn btn-${btnType} ${className || ''}`.trim()} {...props} />
);
export default Button;
