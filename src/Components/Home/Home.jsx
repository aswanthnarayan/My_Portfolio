import styles from '../Home/Home.module.scss'

import React from 'react'
import heroImg from '../../assets/hero.png'
import Bigbutton from './Bigbutton'
import { MdArrowOutward } from "react-icons/md";
import SocialLinks from './SocialLinks';

const Home = () => {
    return (
        <div className={styles.Home}>
            <div className={styles.introText}>
                <div className={styles.heading}>
                <h3>Aswanth C K</h3>
                <span>Web Developer</span>
                </div>
                <p>I'm creative designer based in New York, and I'm very passionate and dedicated to my work.</p>
                <div className={styles.buttonDiv}>
        <Bigbutton/>
        <a href="">My work<MdArrowOutward/></a>
</div>
<div className={styles.socialMediaBtns}>
    <SocialLinks/>
</div>
            
            </div>
            <div className={styles.introImage}>
                <img src={heroImg}alt="" />
            </div>

        </div>
    )
}

export default Home
