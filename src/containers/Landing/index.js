import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Responsive } from 'semantic-ui-react';
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
      <Responsive>
        <div style={{ height: '500vh' }}>a</div>
      </Responsive>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
