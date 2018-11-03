import React from 'react';

export default ({
  Table,
  Pagination,
  Filter,
  SettingsWrapper,
  Style,
  className,
  style,
}) => (
  <div>
    <Style />
    <Filter />
    <Table />
    <Pagination />
  </div>
);