import React from 'react';
import {HDProject} from '../../assets';
import styles from '../../css/Portfolio/OurProjects.module.css';


function HDQualityProject() {
  return (
    <>
    <div className={styles.hdProject}>
        <img src={HDProject}alt="HD VIDEO Project" />
        <div className={styles.hdprojectText}>
<h3>HD Video Quality</h3>
<p>Provide a better experience for your viewers with crystal clear HD video streaming.</p>
</div>
    </div>
      
    </>
  )
}

export default HDQualityProject
