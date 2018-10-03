import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
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
        login
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
