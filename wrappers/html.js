// @flow
import React, { PropTypes, Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

export default class Html extends Component {
  static propTypes = {
    route: PropTypes.object,
    router: PropTypes.object,
  };
  render() {
    const page = this.props.route.page.data;
    return (
      <div>
        <Helmet title={`${config.siteTitle}`} />
        <div dangerouslySetInnerHTML={{ __html: page.body }} />
      </div>
    );
  }
}
