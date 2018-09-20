import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Landing.css';

import { Container, Row, Column } from '../../components';
import { mapStateToProps, mapDispatchToProps } from './selector';

class Landing extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {
    return (
      <Container>
        <Row>
          <Column md={['6']}>
            Landing left
          </Column>
          <Column md={['6']}>
            Landing right
          </Column>
        </Row>
          <Row>
            <Column md={['6']}>
              Landing left
            </Column>
            <Column md={['6']}>
              Landing right
            </Column>
          </Row>
      </Container>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
