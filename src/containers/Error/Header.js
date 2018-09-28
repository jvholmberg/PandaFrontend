import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Segment, Container, Grid, Statistic } from 'semantic-ui-react';

import { mapStateToProps } from './selector';

class Header extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {
    console.log('hgvgvvggg');
    const { error, children } = this.props;
    return (
      <Segment
        inverted
        vertical>
        {children}
        <Container text>
          <Header
            as='h1'
            content={_.get(error, 'status')}
            subheader={_.get(error, 'message')} />
        </Container>
      </Segment>
    );
  }
}
export default connect()(Header);
