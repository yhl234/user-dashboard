/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Card from '../../shared/UI/Card';
import OtherJobs from '../../shared/OtherJobs';
import SocialShare from '../../shared/SocialShare';
import styles from './Job.module.css';
import JobDescription from './JobDescription';

const otherJobs = [
  {
    rank: 'Master',
    type: 'Chemical Tanker',
    date: '20 Aug 2016',
  },
  {
    rank: 'Chief Officer',
    type: 'Oil Tanker',
    date: '20 Aug 2016',
  },
  {
    rank: 'Executive Office',
    type: 'Bulk Carrier',
    date: '20 Aug 2016',
  },
  {
    rank: 'Master',
    type: 'Chemical Tanker',
    date: '20 Aug 2016',
  },
];

const Job = () => {
  return (
    <div className={styles.root}>
      {/* tabs */}
      <nav>
        <ul className={styles.tabs}>
          <li className={`${styles.tab} ${styles.active}`}>
            <a href="#">description</a>
          </li>
          <li className={styles.tab}>
            <a href="#">insight</a>
          </li>
          <li className={styles.tab}>
            <a href="#">applications</a>
          </li>
          <li className={styles.tab}>
            <a href="#">notifications</a>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>
        <section className={styles.job}>
          <Card>
            <h3> Job Description</h3>
            <JobDescription />
          </Card>
        </section>
        <section className={styles.share}>
          <Card>
            <SocialShare />
          </Card>
        </section>
        <section className={styles.other}>
          <Card>
            <h3>Other Jobs</h3>
            {otherJobs.map((j, i) => (
              <OtherJobs
                key={i}
                rank={j.rank}
                type={j.type}
                date={j.date}
                index={i}
              />
            ))}
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Job;
