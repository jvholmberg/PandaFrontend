import React, { Component } from 'react';

import './Expander.css';

const ExpanderCloser = ({ onCollapseExpander, children }) => (
  <button onClick={() => {
    console.log('closer');
    onCollapseExpander();
  }}>
    {children}
  </button>
);

class Expander extends Component {

  constructor(props) {
    super(props);
    this.state = { collapsed: true };
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }

  toggleCollapsed() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    const {
      props: { title, onCollapseExpander, children },
      state: { collapsed },
    } = this;
    return (
      <div className={`Expander ${collapsed ? 'collapsed' : ''}`}>
        <div
          className='Expander-Title'
          onClick={this.toggleCollapsed}>
          {title}
        </div>
        <div className='Expander-Content'>
          {children && React.Children.map(children, (child) => {
            console.log('child', child)
            return React.cloneElement(child, { onCollapseExpander });
          })}
        </div>
      </div>
    );
  }
}
export default Expander;
export { ExpanderCloser };
