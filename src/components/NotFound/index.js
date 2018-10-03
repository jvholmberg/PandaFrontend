import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const NotFound = () => (
  <Container>
    <Header
      as='h1'
      content='Not Found'
      subheader='The page you are trying to access doesnt exist' />
  </Container>
);
export default NotFound;
