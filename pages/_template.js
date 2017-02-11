// @flow
import React from 'react';
import Header from 'components/header';
import { FullScreenLayout } from 'components/layout';

import Menu from 'components/menu';

import { config } from 'config';

type Props = {
  children?: Element<any>,
  route: any,
};

const PageHandler = ({ children }) => {
  return children;
};

export default ({ children, route: { pages, indexRoute } }: Props) => (
  <FullScreenLayout>
    <Header>
      <Menu items={config.menu} />
    </Header>
    <PageHandler pages={pages} {...indexRoute}>
      {children}
    </PageHandler>
  </FullScreenLayout>
);
