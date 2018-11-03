import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Register.css';

import { mapStateToProps, mapDispatchToProps } from './selector';

class Register extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>

      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);
