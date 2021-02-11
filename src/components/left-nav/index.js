/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faBars } from '@fortawesome/free-solid-svg-icons';
import {
  faFileAlt,
  faUser,
  faBuilding,
} from '@fortawesome/free-regular-svg-icons';

import styles from './index.module.css';

const index = () => {
  const [showNav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!showNav);
  };
  return (
    <header className={`${styles.header} ${showNav ? styles.showNav : ''}`}>
      <div
        className={styles.navToggle}
        role="button"
        tabIndex={0}
        onClick={handleClick}
      >
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faBars} size="3x" />
        </div>
      </div>
      <div className={styles.root}>
        <div className={styles.profile}>
          <div className={styles.profilePhoto}>
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="random"
            />
          </div>
          <div className={styles.info}>
            <p>Devinder Kumar</p>
            <span>Chief officer</span>
          </div>

          <button>Update Profile</button>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navLinks}>
            <li>
              <a href="#">
                <div className={styles.navIcons}>
                  <FontAwesomeIcon icon={faLaptop} size="3x" />
                </div>
                <div>dashboard</div>
              </a>
            </li>
            <li className={styles.active}>
              <a href="#">
                <div className={styles.navIcons}>
                  <FontAwesomeIcon icon={faBuilding} size="3x" />
                </div>
                jobs
              </a>
            </li>
            <li>
              <a href="#">
                <div className={styles.navIcons}>
                  <FontAwesomeIcon icon={faFileAlt} size="3x" />
                </div>
                see docs
              </a>
            </li>
            <li>
              <a href="#">
                <div className={styles.navIcons}>
                  <FontAwesomeIcon icon={faUser} size="3x" />
                </div>
                connections
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default index;
