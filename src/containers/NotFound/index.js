import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './NotFound.css';

import { Container, Row, Column } from '../../components';
import { mapStateToProps, mapDispatchToProps } from './selector';

class NotFound extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {

    return (
      <Container>
        <Row>
          <Column xs={['12']} sm={['12']} md={['12']} lg={['12']}>
            <h1>Not Found</h1>
            <p>Thhe requested page doesn't exist</p>
          </Column>
        </Row>
      </Container>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotFound));
