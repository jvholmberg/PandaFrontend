import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Register.css';

import { mapStateToProps, mapDispatchToProps } from './selector';

class Register extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  componentDidUnmount() {

  }
  render() {

    return (<span>Register</span>);
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
