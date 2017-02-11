// @flow
import React, { Component, Element } from 'react';

class Calculator extends Component {
  render(): Element<*> {
    const { children } = this.props;
    return (
      <div>

        Hej 1234
        {children}
      </div>
    );
  }
}

export default Calculator;
