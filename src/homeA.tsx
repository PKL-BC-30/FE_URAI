import styles from './homeA.module.css';
import { Component } from "solid-js";
import { createSignal } from 'solid-js';
import { A, useNavigate } from "@solidjs/router";
import Sidebar from './pages/insideNav';

const HomeA: Component = () => {
  const [showMore, setShowMore] = createSignal(false);

  return (
    <div class={styles.container}>
      <Sidebar />

      <main class={styles.main}>
        <section class={styles.hero}>
          <div class={styles.heroContent}>
          <h1 style="margin-left: 36%;text-transform: uppercase;color:black;">Selamat Datang User</h1>
            <p>
              Urai adalah sebuah platform inovatif yang didesain untuk membantu pengguna dalam mengelola dan mengurangi sampah, baik sampah organik, anorganik, maupun elektronik. 
            </p>
            <p style={styles.pban}>Melalui Urai, pengguna dapat mempelajari berbagai metode pengelolaan sampah yang ramah lingkungan, menghitung jumlah sampah yang dihasilkan, dan mendapatkan tips praktis untuk mendaur ulang dan mengompos.</p>
            <div class={styles.buttons}>
              <button onClick={() => setShowMore(true)}>Learn More</button>
              <button>Contact Us</button>
            </div>
          </div>
          <div class={styles.heroImage}>
          </div>
        </section>

        {showMore() && (
          <section class={styles.features}>
            <h2>Feature kami</h2>
            <div class={styles.featuresGrid}>
              <div class={styles.feature}>
                <h3>Organik</h3>
              
                <p>
                  wkwkwk
                </p>
              </div>
              <div class={styles.feature}>
                <h3>Anorganik</h3>
                <p>
                  wkwkkw
                </p>
              </div>
              <div class={styles.feature}>
                <img src="/natural-product.svg" alt="Natural Product Icon" />
                <h3>Elektrik</h3>
                <p>
                  wkkwkwk
                </p>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default HomeA;
