import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Login.css';

import { Container, Row, Column } from '../../components';
import { mapStateToProps, mapDispatchToProps } from './selector';

class Login extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {

    return (
      <Container>
        <Row>
          <Column>
            dwdwwwewew
          </Column>
        </Row>
      </Container>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
