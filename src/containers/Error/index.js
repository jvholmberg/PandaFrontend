import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NotAllowed, { NOT_ALLOWED } from './views/NotAllowed';
import NotAuthorized, { NOT_AUTHORIZED } from './views/NotAuthorized';
import NotFound, { NOT_FOUND } from './views/NotFound';
import Other, { OTHER } from './views/Other';

import { mapStateToProps, mapDispatchToProps } from './selector';

class Error extends Component {

  componentDidMount() {

  }

  render() {
    console.log(this.props);
    const { type } = this.props;
    switch (type) {
      case NOT_ALLOWED:
        return (<NotAllowed />);
      case NOT_AUTHORIZED:
        return (<NotAuthorized />);
      case NOT_FOUND:
        return (<NotFound />);
      default:
        return (<Other />);
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Error));
