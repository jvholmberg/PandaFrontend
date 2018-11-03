import React from 'react';

const Error = ({ title, message, stacktrace }) => (
  <div>
    <h1>{title}</h1>
    <h3>{message}</h3>
    <p>{stacktrace}</p>
  </div>
);
export default Error;
