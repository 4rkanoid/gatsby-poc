// @flow
import React, { PropTypes, Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

export default class JsonWrapper extends Component {
  static propTypes = {
    route: PropTypes.object,
    router: PropTypes.object,
  };
  render() {
    const { page } = this.props.route;
    return (
      <div>
        <Helmet title={`${config.siteTitle} | ${page.title}`} />
        <div
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(page.data, null, 4),
          }}
        />
      </div>
    );
  }
}
