import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Landing.css';

import { mapStateToProps, mapDispatchToProps } from './selector';
import { DefaultPageLayout as PageLayout } from '../../components/PageLayout';

class Landing extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {
    const { fixed, showFixedNavigation, hideFixedNavigation } = this.props;
    return (
      <PageLayout
        fixed={fixed}
        showFixedNavigation={showFixedNavigation}
        hideFixedNavigation={hideFixedNavigation}>
        <div style={{ height: '500vh' }}>a</div>
      </PageLayout>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
