import React from 'react';
import { connect } from 'react-redux';
import { plugins } from 'griddle-react';

export default ({ Row }) => connect((state, props) => ({
  rowData: plugins.LocalPlugin.selectors.rowDataSelector(state, props),
}))(({ rowData }) => (
  <Row data={rowData} />
));