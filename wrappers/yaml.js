// @flow
import React, { Component, PropTypes } from 'react';
import yaml from 'js-yaml';
import Helmet from 'react-helmet';
import { config } from 'config';

export default class Yaml extends Component {
  static propTypes = {
    route: PropTypes.object,
    router: PropTypes.object,
  };
  render() {
    const { data } = this.props.route.page;
    return (
      <div>
        <Helmet title={`${config.siteTitle} | ${data.title}`} />
        <h1>{data.title}</h1>
        <p>Raw view of yaml file</p>
        <pre dangerouslySetInnerHTML={{ __html: yaml.safeDump(data) }} />
      </div>
    );
  }
}
