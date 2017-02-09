// @flow
import React from 'react';
import './layout.css';
import styles from './layout.module.css';

export const FullScreenLayout = ({ children }) => (
  <div className={styles.fullScreen}>
    {children}
  </div>
);
