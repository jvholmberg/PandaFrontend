import React from 'react';
import _ from 'lodash';
import './Grid.css'

const Container = ({ children, className = '' }) => {
  return (
    <div className={`${className} comp-grid comp-container`.trim()}>
      {children}
    </div>
  );
};

const Row = ({ children, className = '' }) => {
  return (
    <div className={`${className} comp-grid comp-row`.trim()}>
      {children}
    </div>
  );
};

const Column = ({ xs, sm, md, lg, children, className = '', }) => {
  const xsProperties = !_.isEmpty(xs) ? `comp-column-xs-${xs.join(' comp-column-xs-')} ` : '';
  const smProperties = !_.isEmpty(sm) ? `comp-column-sm-${sm.join(' comp-column-sm-')} ` : '';
  const mdProperties = !_.isEmpty(md) ? `comp-column-md-${md.join(' comp-column-md-')} ` : '';
  const lgProperties = !_.isEmpty(lg) ? `comp-column-lg-${lg.join(' comp-column-lg-')} ` : '';
  const properties = _.concat([], xsProperties, smProperties, mdProperties, lgProperties);
  return (
    <div className={`${className} comp-grid comp-column ${properties.join('')}`.trim()}>
      {children}
    </div>
  );
};

export { Container, Row, Column };
