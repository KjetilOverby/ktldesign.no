import React from "react";
import styles from "../../../styles/startpage/ImageSection.module.css";
import TopComponent from "./TopComponent";
import { GiCarKey } from "react-icons/gi";
import { FaWrench } from "react-icons/fa";
import { MdStore } from "react-icons/md";

const ImageSection = () => {
  return (
    <div className={styles.container}>
      <svg
        className={styles.topWave2}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#adadad81"
          d="M0,64L60,69.3C120,75,240,85,360,74.7C480,64,600,32,720,21.3C840,11,960,21,1080,37.3C1200,53,1320,75,1380,85.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <svg
        className={styles.topWave3}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#d1d1d19f"
          d="M0,64L60,69.3C120,75,240,85,360,74.7C480,64,600,32,720,21.3C840,11,960,21,1080,37.3C1200,53,1320,75,1380,85.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <svg
        className={styles.topWave}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#455568"
          d="M0,64L60,69.3C120,75,240,85,360,74.7C480,64,600,32,720,21.3C840,11,960,21,1080,37.3C1200,53,1320,75,1380,85.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>

      <svg
        className={styles.bottomWave2}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#adadad81"
          d="M0,224L80,218.7C160,213,320,203,480,202.7C640,203,800,213,960,229.3C1120,245,1280,267,1360,277.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <svg
        className={styles.bottomWave3}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#d1d1d19f"
          d="M0,224L80,218.7C160,213,320,203,480,202.7C640,203,800,213,960,229.3C1120,245,1280,267,1360,277.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <svg
        className={styles.bottomWave}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          d="M0,224L80,218.7C160,213,320,203,480,202.7C640,203,800,213,960,229.3C1120,245,1280,267,1360,277.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <TopComponent />
    </div>
  );
};

export default ImageSection;
