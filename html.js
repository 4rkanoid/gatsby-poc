// @flow
import React, { Component, Element } from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';

const BUILD_TIME = new Date().getTime();

// $FlowFixMe
const rawCss = require('!raw!./public/styles.css');

type Props = {
  body: string
};

export default class Html extends Component<void, Props, void> {
  render(): Element<any> {
    const head = Helmet.rewind();
    const { body } = this.props;
    let css;
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: rawCss
          }}
        />
      );
    }
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {css}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    );
  }
}
