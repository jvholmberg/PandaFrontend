import React from 'react';

export default ({
  title,
  columnId,
  onClick,
  onMouseEnter,
  onMouseLeave,
  icon,
  style,
  className,
}) => (
  <th
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={style}
    className={className}>
    {icon}
    {title}
  </th>
);