import React from 'react';
import styles from './OtherJobs.module.css';

const OtherJobs = ({
  rank = 'Master',
  type = 'Chemical Tanker',
  date = '20 Aug 2016',
  index = 0,
}) => {
  // 123
  return (
    <div className={styles.root}>
      <div className={styles.images}>
        <img
          src={`https://picsum.photos/100/100?random=${index}`}
          alt="company logo"
        />
      </div>
      <div className={styles.info}>
        <p className={styles.rank}>{rank}</p>
        <p className={styles.type}>{type}</p>
        <p className={styles.date}>Posted: {date}</p>
      </div>
    </div>
  );
};

export default OtherJobs;
