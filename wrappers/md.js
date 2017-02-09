// @flow
import React, { PropTypes, Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

import 'css/markdown-styles.css';

export default class Markdown extends Component {
  static propTypes = {
    route: PropTypes.object,
    router: PropTypes.object,
  };
  render() {
    const page = this.props.route.page.data;
    return (
      <div>
        <Helmet title={`${config.siteTitle} | ${page.title}`} />
        <div dangerouslySetInnerHTML={{ __html: page.body }} />
      </div>
    );
  }
}
