// @flow
import React from 'react';
import './layout.css';
import styles from './layout.module.css';
type Props = {
  children?: Element<*>
};
export default ({ children }: Props) => (
  <div className={styles.fullScreen}>
    {children}
  </div>
);
