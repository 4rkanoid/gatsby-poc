// @flow
import React from 'react';
import styles from './menu.module.css';

import MenuItem from './menu-item';
import type { MenuItemPropTypes } from './menu-item';

type MenuPropTypes = {
  items: MenuItemPropTypes,
};

export default ({ items }: MenuPropTypes) => (
  <div className={styles.menu}>
    {Object.keys(items).map(title => (
      <MenuItem key={title} title={title} link={items[title]} />
    ))}
  </div>
);
