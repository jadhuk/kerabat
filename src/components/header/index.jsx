import React from "react";
import styles from "./index.module.css";
import logo from "../../assets/header/agroslogo.svg";
import menu from "../../assets/header/menu.svg";
import details from "../../assets/header/details.svg";
import message from "../../assets/header/message.svg";
import notif from "../../assets/header/notif.svg";
import path from "../../assets/header/path.svg";

import { useHistory } from "react-router-dom";
const Header = () => {
  return (
    <div className={styles.div}>
      <img src={logo} className={styles.imglogo} />
      <p className={styles.agros}>
        AGROS<span className={styles.shipper}>shipper</span>
      </p>
      <div className={styles.navwrapper}>
        <img src={menu} className={styles.imgnav} />
        <img src={path} className={styles.path} />
        <img src={details} className={styles.imgnav} />
        <img src={path} className={styles.path} />
        <img src={message} className={styles.imgnav} />
        <img src={path} className={styles.path} />
        <img src={notif} className={styles.imgnav} />
        <button className={styles.btn}>Admin 1: Pramono</button>
      </div>
    </div>
  );
};
export default Header;
