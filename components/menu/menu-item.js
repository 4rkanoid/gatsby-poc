// @flow
import React from 'react';
import styles from './menu.module.css';
import { Link } from 'react-router';

export type MenuItemPropTypes = {
  title: string,
  link: string,
};

export default ({ title, link }: MenuItemPropTypes) => (
  <Link className={styles.menuItem} to={link}>
    {title}
  </Link>
);
