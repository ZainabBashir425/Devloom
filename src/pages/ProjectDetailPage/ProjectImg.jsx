import React from 'react'
import {ProductDetailImg} from '../../assets'
import styles from '../../css/ProjectDetail/ProjectImg.module.css'
function ProjectImg() {
  return (
    <div className={styles.projectDetailcontainer}>
      <div className={styles.subTitle}>
          <h3>
            DEVELOPMENT
          </h3>
          <span>16 March 2023</span>
      </div>
      <div className={styles.projectImg}><img src={ProductDetailImg} alt=""  /></div>
    </div>
  )
}

export default ProjectImg
