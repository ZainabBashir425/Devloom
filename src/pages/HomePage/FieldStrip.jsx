import React from 'react';
import {whiteStar} from "../../assets";
import styles from "../../css/Home.module.css";

function FieldStrip(props) {
  return (
    <>
    <section className={styles.fieldStrip} style={{background:`${props.bgColor}`,color:`${props.textColor}`}}>
<img src={whiteStar} alt="White Star" />
<p>web development       app development   ui design       ux design      branding     logo design      social media mamagemtn         poster design</p>
    </section>
      
    </>
  )
}

export default FieldStrip
