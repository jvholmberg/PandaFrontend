import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Button, Icon } from 'semantic-ui-react';

import './Login.css';

import { mapStateToProps, mapDispatchToProps } from './selector';
import { DefaultPageLayout as PageLayout } from '../../components/PageLayout';

const Heading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Imagine-a-Company'
      inverted />
    <Header
      as='h2'
      content='Do whatever you want when you want to.'
      inverted />
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
);

class Login extends Component {

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
        heading={Heading}>
        <div style={{ height: '500vh' }}>a</div>
      </PageLayout>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
