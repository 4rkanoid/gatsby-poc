// @flow
import React, { Component, PropTypes } from 'react';
import toml from 'toml-js';
import Helmet from 'react-helmet';
import { config } from 'config';

export default class Toml extends Component {
  static propTypes = {
    route: PropTypes.object,
    router: PropTypes.object,
  };
  render(): Component {
    const { data } = this.props.route.page;
    return (
      <div>
        <Helmet title={`${config.siteTitle} | ${data.title}`} />
        <h1>{data.title}</h1>
        <p>Raw view of toml file</p>
        <pre dangerouslySetInnerHTML={{ __html: toml.dump(data) }} />
      </div>
    );
  }
}
