import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Container, Header, Message, Pagination } from 'semantic-ui-react';

import { mapStateToProps, mapDispatchToProps } from './selector';
import ErrorHeader from './Header';
import PageLayout from '../../components/PageLayout';

class Error extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {
    const {
      current,
      total,
      error,
      goToError,
      fixed,
      showFixedNavigation,
      hideFixedNavigation,
    } = this.props;
    return (
      <PageLayout
        showFixedNavigation={showFixedNavigation}
        hideFixedNavigation={hideFixedNavigation}
        fixed={fixed}
        header={ErrorHeader}>
        <Container>
          <Header
            as='h1'
            content={_.get(error, 'status')}
            subheader={_.get(error, 'message')} />
            <Message>
              {_.get(error, 'stacktrace')}
            </Message>
            <Pagination
              defaultActivePage={total - 1}
              firstItem={null}
              lastItem={null}
              pointing
              secondary
              totalPages={total}
              onPageChange={(event, data) => {

                goToError(data.activePage);
              }} />
        </Container>
      </PageLayout>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Error);
