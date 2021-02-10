import React from 'react';
import styles from './JobDescription.module.css';

const JobDescription = () => {
  return (
    <section className={styles.root}>
      <div className={styles.row}>
        <div className={styles.name}>
          <p>Rank</p>
        </div>
        <div className={styles.value}>
          <p>Master</p>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.name}>
          <p>Ship type</p>
        </div>
        <div className={styles.value}>
          <p>Chemical Tanker</p>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.name}>
          <p>Min. Experience</p>
        </div>
        <div className={styles.value}>
          <p>06 Months</p>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.name}>
          <p>US Visa</p>
        </div>
        <div className={styles.value}>
          <p>Required</p>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.name}>
          <p>Approx Joining</p>
        </div>
        <div className={styles.value}>
          <p>20 September 2016</p>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.name}>
          <p>Salary</p>
        </div>
        <div className={styles.value}>
          <p>5000 USD</p>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.name}>
          <p>Ship Details</p>
        </div>
        <div className={styles.value}>
          <p>
            Chembulk gibrlater
            <br />
            20000 DWT <br /> 2010 Built
          </p>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.name}>
          <p>Description</p>
        </div>
        <div className={styles.value}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JobDescription;
