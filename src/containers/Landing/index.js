import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Landing.css';

import { mapStateToProps, mapDispatchToProps } from './selector';

class Landing extends Component {

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
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
