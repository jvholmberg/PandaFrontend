import React from 'react';

export default ({
  placeholder,
  onChange,
  style,
  className,
}) => (
  <input
    type='text'
    name='filter'
    placeholder={placeholder}
    onChange={onChange}
    style={style}
    className={className} />
);