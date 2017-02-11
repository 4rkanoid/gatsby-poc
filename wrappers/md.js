// @flow
import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

import 'css/markdown-styles.css';

type Props = {
  route: any,
};

export default ({ route: { page: { data } } }: Props) => (
  <div>
    <Helmet title={`${config.siteTitle} | ${data.title}`} />
    <div dangerouslySetInnerHTML={{ __html: data.body }} />
  </div>
);
