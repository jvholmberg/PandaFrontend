import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const NotAllowed = () => (
  <Container>
    <Header
      as='h1'
      content='Not Allowed'
      subheader='You are not allowed to access this page' />
  </Container>
);
export default NotAllowed;
