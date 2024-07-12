// src/components/HomePage.tsx
import { Component } from "solid-js";
import styles from "./homepage.module.css";
import Navbar from "./pages/navbar"; // Import the new Navbar component
import banner from "./pages/img/plastik.png";
import banner2 from "./pages/img/Banner1.png";
import banner3 from "./pages/img/electric.png";

const HomePage: Component = () => {
  return (
    <>  
      <Navbar /> {/* Include the new Navbar */}
      <div class={styles.container}>
        <div class={styles.bannerContent}>
          <img src={banner} alt="plastik" class={styles.banner} />
        </div>
        <div class={styles.bannerContent2}>
          <img src={banner3} alt="Banner3" class={styles.banner2} />
        </div>
        <div class={styles.bannerContent2}>
          <img src={banner2} alt="Banner1" class={styles.banner2} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
  