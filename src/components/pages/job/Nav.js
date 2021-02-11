/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faCog,
  faSignOutAlt,
  faSearch,
  faArrowUp,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Nav.module.css';

const Nav = () => {
  const [showNav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!showNav);
  };
  return (
    <header className={styles.header}>
      <div className={`${styles.root} ${showNav ? styles.showNav : ''}`}>
        <div className={styles.navToggle}>
          <div className={styles.icons} onClick={handleClick}>
            <FontAwesomeIcon icon={faEllipsisH} size="3x" />
          </div>
        </div>
        <div className={styles.search}>
          <div className={styles.icons}>
            <FontAwesomeIcon icon={faSearch} size="1x" />
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
            <FontAwesomeIcon icon={faCog} size="1x" />
          </div>
          <div className={styles.icons}>
            <FontAwesomeIcon icon={faEnvelope} size="1x" />
          </div>
          <div className={styles.icons}>
            <FontAwesomeIcon icon={faSignOutAlt} size="1x" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
