import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Login.css';

import Expander, { ExpanderCloser } from '../../components/Expander';
import { mapStateToProps, mapDispatchToProps } from './selector';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { test: true };
    this.test = this.test.bind(this);
  }
  componentDidMount() {

  }

  test() {
    alert('test');
  }
  render() {
    return (
      <div>
        <Expander title='#1' onCollapseExpander={this.test}>
          <Expander title='#2'>
            <Expander title='#3'>
              <ExpanderCloser>Close</ExpanderCloser>
            </Expander>
          </Expander>
        </Expander>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
