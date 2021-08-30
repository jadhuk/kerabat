import React from "react";
import styles from "./index.module.css";
import profile from "../../assets/dashboard/profile.svg";
import pengaturan from "../../assets/dashboard/pengaturan.svg";

const Dashboard = () => {
  return (
    <div className={styles.bgdash}>
      <p className={styles.title}>Dashboard Kerabat</p>
      <div className={styles.cardswrapper}>
        <div className={styles.cards}>
          <div className={styles.profile}>
            <div className={styles.iconwrapper}>
              <img src={profile} className={styles.profilelogo} />
              <img src={pengaturan} className={styles.pengaturan} />
            </div>
            <p className={styles.name}>PT. ANTAR GLOBAL PROSPERO</p>
            <p className={styles.phone}>+62 (31) 3974550</p>
            <p className={styles.email}>Antarglobalprospero@gmail.com</p>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.profile}>
            <div className={styles.iconwrapper}>
              <img src={profile} className={styles.profilelogo} />
              <img src={pengaturan} className={styles.pengaturan} />
            </div>
            <p className={styles.name}>TAMBAH PURCHASE ORDER</p>
            <p className={styles.phone}>+62 (31) 3974550</p>
            <p className={styles.email}>Antarglobalprospero@gmail.com</p>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.poAktif}>
            <div className={styles.iconwrapper}>
              <img src={profile} className={styles.profilelogo} />
            </div>
            <p className={styles.name}></p>
            <p className={styles.phone}></p>
            <p className={styles.email}></p>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.poSisa}>
            <div className={styles.iconwrapper}>
              <img src={profile} className={styles.profilelogo} />
            </div>
            <p className={styles.name}></p>
            <p className={styles.phone}></p>
            <p className={styles.email}></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
