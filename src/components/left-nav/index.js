/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import {
  faFileAlt,
  faUser,
  faBuilding,
} from '@fortawesome/free-regular-svg-icons';

import styles from './index.module.css';

const index = () => {
  console.log(123);
  return (
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
  );
};

export default index;
