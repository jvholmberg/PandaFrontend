import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header } from 'semantic-ui-react';

import './Landing.css';

import { mapStateToProps, mapDispatchToProps } from './selector';
import { DefaultPageLayout as PageLayout } from '../../components/PageLayout';

const Heading = () => (
  <Container style={{ padding: '15rem 0 20rem' }}>
    <Header
      as='h1'
      content='PandaTime'
      inverted />
    <Header
      as='h2'
      content='Do your reporting fast, free and without the hazzle!'
      inverted />
  </Container>
);

class Landing extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {
    const { fixed, showFixedNavigation, hideFixedNavigation } = this.props;
    const { open, toggleSidebar, closeSidebar } = this.props;
    return (
      <PageLayout
        fixed={fixed}
        showFixedNavigation={showFixedNavigation}
        hideFixedNavigation={hideFixedNavigation}
        open={open}
        toggleSidebar={toggleSidebar}
        closeSidebar={closeSidebar} 
        heading={Heading}
        className='Landing-Hero'>
        <div className="foobar" style={{ height: '500vh' }}>a</div>
      </PageLayout>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
