// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class RootTemplate extends Component {
  static propTypes = {
    route: PropTypes.object,
    children: PropTypes.any,
  };
  render(): Component {
    return (
      <div className="template">
        <Link to="/blog/">aaa</Link>
        {this.props.children}
      </div>
    );
  }
}
