import React from 'react';

export default ({
  TableHeading,
  TableBody,
  Loading,
  NoResults,
  style,
  className,
  dataLoading,
  visibleRows
}) => {
  if (dataLoading) {
    return (<Loading />);
  };
  if (visibleRows === 0) {
    return (<NoResults />);
  }
  return (
    <table className={`table ${className}`}>
      <TableHeading />
      <TableBody />
    </table>
  );

};