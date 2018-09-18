import React from 'react';
import { Route } from 'react-router-dom';
import _ from 'lodash';
import Error from '../../containers/Error';

const RestrictedRoute = ({
  roles,
  requiredRoles,
  component,
  ...props,
}) => {
  // Everyone can access route
  if (_.isEmpty(requiredRoles)) {
    return (<Route component={component} {...props}  />);
  }

  // Role restricted route
  if (_.intersection(roles, requiredRoles).length > 0) {
    return (<Route component={component} {...props}  />);
  }

  // Not allowed to access route
  return (<Route component={Error} {...props} />);

};
export default RestrictedRoute;
