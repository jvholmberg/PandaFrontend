import React from 'react';

export default ({
  columnTitles,
  columnIds,
  TableHeadingCell,
  style,
  className,
}) => (
  <thead>
    <tr>
      {columnIds && columnTitles && columnTitles.map((title, idx) => (
        <TableHeadingCell
          key={idx}
          columnId={columnIds[idx]}
          title={title}
          className={className} />
      ))}
    </tr>
  </thead>
);