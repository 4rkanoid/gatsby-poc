import React, { Component, PropTypes } from 'react';

export default class RootTemplate extends Component {
  static propTypes = {
    children: PropTypes.any,
  };
  render() {
    return (
      <div className="template">
        {this.props.children}
      </div>
    );
  }
}
