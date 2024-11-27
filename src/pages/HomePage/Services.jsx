import React from "react";
import style from "../../css/Home/About.module.css";
import styles from "../../css/Home/Services.module.css";
import {
  Service,
  TopRightArrow,
  RightArrow,
  RightArrowW,
  TopRightArrowW,
} from "../../assets";

const Services = () => {
  return (
    <div className={styles.serviceContainer}>
      <div className={`${style.leftBanner} ${styles.leftBanner}`}>
        <span>WHAT WE DO</span>
      </div>
      <div className={styles.serviceContent}>
        <div className={styles.services}>
          <div className={styles.heading}>
            <p>Our</p>
            <div className={styles.highlight}>
              <p>Services</p>
            </div>
          </div>
          <p>
            Devloom offers a range of design services that are tailored to meet
            the unique needs of each client.
          </p>
          <div className={styles.servicesList}>
            <div className={`${styles.serviceItem} ${styles.active}`}>
              <p className={styles.serviceButton}>
                <span className={styles.serviceNumber}>01 </span>UI/UX Design
              </p>
              <img src={RightArrowW} alt="" />
            </div>
            <div className={styles.serviceItem}>
              <p className={styles.serviceButton}>
                <span className={styles.serviceNumber}>02 </span>Web Development
              </p>
              <img src={RightArrow} alt="" />
            </div>
            <div className={styles.serviceItem}>
              <p className={styles.serviceButton}>
                <span className={styles.serviceNumber}>03 </span>Branding
              </p>
              <img src={RightArrow} alt="" />
            </div>
            <div className={styles.serviceItem}>
              <p className={styles.serviceButton}>
                <span className={styles.serviceNumber}>04 </span>App Development
              </p>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.imageSection}>
          <img
            src={Service}
            alt="Service Visual"
            className={styles.mainImage}
          />
          <div className={styles.infoBoxes}>
            <div className={styles.infoBox}>
              <p>Ever wondered how design magic happens?</p>
              <div className={styles.infoButton}>
                <p>See how we work </p>
                <div className={styles.infoimg}>
                  <img src={TopRightArrowW} alt="" />
                </div>
              </div>
            </div>
            <div className={styles.infoBox}>
              <p>
                Looking for design experts who can bring your vision to life?
              </p>
              <div className={styles.infoButton}>
                <p>Meet our expert</p>{" "}
                <div className={styles.infoimg}>
                  <img src={TopRightArrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
