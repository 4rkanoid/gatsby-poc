// @flow
import React from 'react';
import styles from './header.module.css';

type Props = {
  children?: Element<*>
};

export default ({ children }: Props) => (
  <div className={styles.header}>
    {children}
  </div>
);
