import React from 'react';
import { Container, Row, Column } from './';

describe('Grid', () => {
  it('Empty props matches snapshot', () => {
    expect(render(
      <Container />
    )).toMatchSnapshot();
  });
  it('With props matches snapshot', () => {
    expect(render(
      <Container className='TEST' xs={['hide']} sm={['12']} md={['6']} lg={['3']} />
    )).toMatchSnapshot();
  });
});
