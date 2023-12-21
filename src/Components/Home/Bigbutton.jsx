import React from 'react'
import styles from '../Home/Bigbutton.module.scss'
import { PiTelegramLogoLight } from "react-icons/pi";


const Bigbutton = () => {
  return (
      <button className={styles.bigBtn}>Say Hello <PiTelegramLogoLight/></button>
  )
}

export default Bigbutton
