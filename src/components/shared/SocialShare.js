import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SocialShare.module.css';

const SocialShare = () => {
  return (
    <div className={styles.root}>
      <FontAwesomeIcon icon={faFacebook} size="3x" className={styles.fbIcon} />
      <span>Share on facebook</span>
    </div>
  );
};

export default SocialShare;
