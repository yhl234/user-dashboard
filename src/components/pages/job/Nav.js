/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faCog,
  faSignOutAlt,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <div className={styles.root}>
      <div className={styles.search}>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faSearch} size="2x" />
        </div>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.active}>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Questions</a>
          </li>
          <li>
            <a href="#">Companies</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className={styles.actions}>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faCog} size="2x" />
        </div>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </div>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
