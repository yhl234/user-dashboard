import React from 'react';
import Job from './Job';
import Nav from './Nav';

import JobHeader from './JobHeader';
import styles from './index.module.css';

const index = () => {
  return (
    <div>
      <Nav />
      <div className={styles.root}>
        {/* router */}
        <JobHeader />
        <Job />
      </div>
    </div>
  );
};

export default index;
