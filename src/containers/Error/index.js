import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Container, Header, Pagination } from 'semantic-ui-react';

import { mapStateToProps, mapDispatchToProps } from './selector';

class Error extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {
    const { current, total, error, goToError } = this.props;
    return (
      <Container>
        <Header
          as='h1'
          content={_.get(error, 'status')}
          subheader={_.get(error, 'message')} />
        <Pagination
          totalPages={total}
          onPageChange={(event, data) => goToError(data.activePage)} />
      </Container>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Error);
