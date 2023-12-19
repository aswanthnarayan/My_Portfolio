
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { CgMenu, CgClose } from "react-icons/cg";
import logo from '../../assets/logo.png'


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.navContainer}>
          <NavLink exact to="/" className={styles.navLogo}>
            <span >
              <img src={logo} alt="logo" />
            </span>
            <span>DevZo</span>

          </NavLink>

          <ul className={click ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
            <li className={styles.navItem}>
              <NavLink
                exact
                to="/"
                className={styles.navLinks}
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                exact
                to="/about"
                className={styles.navLinks}
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                exact
                to="/blog"
                className={styles.navLinks}
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                exact
                to="/contact"
                className={styles.navLinks}
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
            <li >
              <NavLink
                exact
                to="/contact"
                className={styles.navLinks}
                onClick={handleClick}
              >
                <button className={styles.cvDownloadBtn}>Download Cv</button>
              </NavLink>
            </li>
          </ul>
          <div className={styles.navIcon} onClick={handleClick}>
            {click ? (
              <span className={styles.icon}>
                <CgClose />{" "}
              </span>
            ) : (
              <span className={styles.icon}>
                <CgMenu />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
