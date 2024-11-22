import React from 'react';
import styles from "../../css/Home.module.css";


function ProjectCard(props) {
  return (
    <>
      <div className={styles.projectCard}>
<div className={styles.projectImg}><div className={styles.projectNo}>
    {props.projectNo}
</div><img src={props.image} alt="Mobile App" />
<div className={styles.projects}>Projects</div></div>
<div className={styles.projectInfo}>
    <h3>Mobile App</h3>
    <p>lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum  </p>
</div>
      </div>
    </>
  )
}

export default ProjectCard
