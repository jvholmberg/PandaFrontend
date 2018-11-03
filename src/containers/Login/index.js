import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Login.css';

import { mapStateToProps, mapDispatchToProps } from './selector';

class Login extends Component {

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
export default connect(mapStateToProps, mapDispatchToProps)(Login);
