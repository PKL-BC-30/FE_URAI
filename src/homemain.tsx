import { Component } from "solid-js";
import styles from "./homemain.module.css"; // Import CSS file
import Sidebar from "./pages/insideNav"; // Import Sidebar

const HomeMain: Component = () => {
  return (
    <div class={styles.container}>
      <Sidebar /> {/* Tambahkan Sidebar */}
      <div class={styles.mainContent}>
      <h1 class="_title_920sb_47" style="padding: 46px;font-size:69px;padding-left: 30vh;color: white;">Jenis Sampah</h1>
        <div class={styles.boxes}>
          <div class={styles.boxContainer}>
            <div class={styles.box}>
              <img src="src/pages/img/plastik.png" alt="Sampah Organik" />
              <p>Sampah Organik</p>
            </div>
            <button class={styles.calculateButton}>Hitung Sampah</button>
          </div>
          <div class={styles.boxContainer}>
            <div class={styles.box}>
              <img src="src/pages/img/Banner1.png" alt="Sampah Anorganik" />
              <p>Sampah Anorganik</p>
            </div>
            <button class={styles.calculateButton}>Hitung Sampah</button>
          </div>
          <div class={styles.boxContainer}>
            <div class={styles.box}>
              <img src="src/pages/img/electric.png" alt="Sampah Elektronik" />
              <p>Sampah Elektronik</p>
            </div>
            <button class={styles.calculateButton}>Hitung Sampah</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
