import React from 'react';
import Table, { TableHeader } from '../../../components/Table';

const Row = ({ data: { date, name } }) => (
  <tr>
    <td className='text-left'>{date}</td>
    <td className='text-left'>{name}</td>
  </tr>
);

const SessionTable = ({ data }) => (
  <Table data={data} row={Row} className='table-bordered'>
    <TableHeader id='date' title='Date' headerCssClassName='text-left' />
    <TableHeader id='name' title='Session' headerCssClassName='text-left' />
  </Table>
);
export default SessionTable;
