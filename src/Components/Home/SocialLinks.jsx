import styles from '../Home/SocialLinks.module.scss';
import React from 'react'
import { LiaLinkedinIn } from "react-icons/lia";
import { LiaGithub } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";

const SocialLinks = () => {
  return (
    <div className={styles.socialinks}>
        <span>Follow me:</span>
        <div className={styles.linkedIn}><LiaLinkedinIn className={styles.btn}/></div>
        <div className={styles.gitHub}><LiaGithub className={styles.btn}/></div>
        <div className={styles.instagram}><LiaInstagram className={styles.btn}/></div>

    </div>
  )
}

export default SocialLinks
