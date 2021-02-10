import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faRedoAlt, faCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './JobHeader.module.css';

const JobHeader = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <h3>Master</h3>
        <p>Chemical Tanker</p>
      </div>
      <div className={styles.actions}>
        <div className={styles.status}>
          <FontAwesomeIcon
            className={styles.active}
            icon={faCircle}
            size="1x"
          />
          <span>Active</span>
        </div>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faRedoAlt} size="1x" rotation={135} />
        </div>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faEdit} size="1x" />
        </div>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faTrashAlt} size="1x" />
        </div>
      </div>
    </div>
  );
};

export default JobHeader;
