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
            <h1 style="margin-left: 36%; text-transform: uppercase; color: black;">Selamat Datang User</h1>
            <p>
              Urai adalah sebuah platform inovatif yang didesain untuk membantu pengguna dalam mengelola dan mengurangi sampah, baik sampah organik, anorganik, maupun elektronik. 
            </p>
            <p class={styles.pban}>Melalui Urai, pengguna dapat mempelajari berbagai metode pengelolaan sampah yang ramah lingkungan, menghitung jumlah sampah yang dihasilkan, dan mendapatkan tips praktis untuk mendaur ulang dan mengompos.</p>
            <div class={styles.buttons}>
              <button onClick={() => setShowMore(true)}>Learn More</button>
              <button>Hubungi Kami</button>
            </div>
          </div>
          <div class={styles.heroImage}>
          </div>
        </section>

        {showMore() && (
          <section class={styles.features}>
            <h2>Jenis Sampah</h2>
            <div class={styles.featuresGrid}>
              <div class={styles.feature}>
                <h3>Organik</h3>
                <p>
                  Sampah organik adalah limbah yang berasal dari bahan-bahan organik yang dapat terurai secara alami melalui aksi mikroorganisme seperti bakteri dan jamur. Jenis limbah ini mencakup sisa-sisa makanan, daun, ranting, kertas, dan bahan-bahan lain yang berasal dari tumbuhan atau hewan. Karena sifatnya yang mudah terurai, sampah organik dapat didaur ulang menjadi kompos atau bahan lain yang bermanfaat bagi lingkungan.
                </p>
              </div>
              <div class={styles.feature}>
                <h3>Anorganik</h3>
                <p>
                  Sampah anorganik adalah jenis limbah yang berasal dari bahan-bahan non-organik, yang umumnya tidak dapat terurai secara alami oleh mikroorganisme. Contoh sampah anorganik meliputi plastik, logam, kaca, dan kertas yang tidak dapat didaur ulang. Bahan-bahan ini memerlukan waktu yang sangat lama untuk terurai atau bahkan tidak terurai sama sekali, sehingga memerlukan penanganan khusus untuk mengurangi dampak lingkungan.
                </p>
              </div>
              <div class={styles.feature}>
                <img src="/natural-product.svg" alt="Natural Product Icon" />
                <h3>Elektrik</h3>
                <p>
                  Sampah elektrik, atau sering disebut e-waste, adalah limbah yang berasal dari perangkat elektronik dan listrik yang tidak lagi digunakan, rusak, atau sudah usang. Contoh e-waste meliputi komputer, ponsel, televisi, lemari es, dan alat-alat rumah tangga lainnya. E-waste sering mengandung bahan berbahaya yang dapat mencemari lingkungan jika tidak didaur ulang dengan benar, sehingga penting untuk menangani dan mendaur ulangnya dengan cara yang aman dan ramah lingkungan.
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
