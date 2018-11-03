import React from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition as TableHeader } from 'griddle-react';
import _ from 'lodash';

import Layout from './components/Layout';
import Filter from './components/Filter';
import Table from './components/Table';
import TableHeading from './components/TableHeading';
import TableHeadingCell from './components/TableHeadingCell';
import Row from './components/Row';
import Loading from './components/Loading';

export default ({ data, row, className, children, ...props }) => (
  <Griddle
    {...props}
    data={data}
    plugins={[plugins.LocalPlugin]}
    styleConfig={{
      icons: {
        TableHeadingCell: {
          sortDescendingIcon: <small>(desc)</small>,
          sortAscendingIcon: <small>(asc)</small>,
        },
      },
      classNames: {
        Filter: 'form-control',
        Table: className,
        Row: '',
      },
      styles: {
        Filter: { fontSize: 18 },
        Table: { border: "2px solid #555 "},
      }
    }}
    components={{
      Layout,
      Filter,
      Table,
      TableHeading,
      TableHeadingCell,
      Row: Row({ Row: row }),
      Loading,
    }}>
    <RowDefinition>
      {children}
    </RowDefinition>
  </Griddle>
);
export { TableHeader };
