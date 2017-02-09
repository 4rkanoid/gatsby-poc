// @flow
import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

import 'css/markdown-styles.css';

export default ({ route: { page: { data } } }) => (
  <div>
    <Helmet title={`${config.siteTitle} | ${data.title}`} />
    <div dangerouslySetInnerHTML={{ __html: data.body }} />
  </div>
);
