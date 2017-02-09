// @flow
import React from 'react';

import Header from 'components/header';
import { FullScreenLayout } from 'components/layout';

export default ({ children }) => (
  <FullScreenLayout>
    <Header />
    {children}
  </FullScreenLayout>
);
