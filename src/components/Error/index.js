import React from 'react';
import { Container, Header, Message } from 'semantic-ui-react';

const Error = ({ title, message, stacktrace }) => (
  <Container>
    <Header
      as='h1'
      content={title}
      subheader={message} />
      <Message>
        {stacktrace}
      </Message>
  </Container>
);
export default Error;
