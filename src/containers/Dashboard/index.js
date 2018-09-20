import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Dashboard.css';

import { mapStateToProps, mapDispatchToProps } from './selector';
import Overview from './views/Overview';
import Report from './views/Report';
import Settings from './views/Settings';

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <Report />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
