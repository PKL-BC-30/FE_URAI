import { Component } from "solid-js";
import { createSignal } from 'solid-js';
import { A, useNavigate } from "@solidjs/router";
import styles from './login.module.css';
import Navbar from "./pages/navbar";
import { users } from './admin/store'; // Adjust the path to your store file

const Login: Component = () => {
  const [username, setUsername] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [error, setError] = createSignal('');
  const navigate = useNavigate();

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    // Find user by username
    const user = users.find(user => user.username === username());

    if (!user) {
      setError('Username tidak ditemukan');
      return;
    }

    // Verify password
    if (user.password !== password()) {
      setError('Password salah');
      return;
    }

    // If successful, navigate to HomeMain
    console.log('Login successful');
    setError('');
    navigate('/homeA'); // Navigate to the HomeMain component
  };

  return (
    <div class={styles.loginPage}>
      <Navbar />
      <div class={styles.mainContainer}>
        <div class={styles.welcomeSection}>
          <h1>Selamat Datang</h1>
          <p>Selamat datang di Urai, platform untuk mengelola sampah secara efisien.</p>
          <p>Silahkan login untuk masuk atau anda bisa register jika tidak mempunyai akun</p>
        </div>
        <div class={styles.loginContainer}>
          <form onSubmit={handleSubmit}>
            <div class={styles.formGroup}>
            <label for="username" style="
    color: white;
">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username()}
                onInput={(e) => setUsername(e.target.value)}
                class={styles.inputField}
                required
              />
            </div>
            <div class={styles.formGroup}>
            <label for="username" style="
    color: white;
">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password()}
                onInput={(e) => setPassword(e.target.value)}
                class={styles.inputField}
                required
              />
            </div>
            <button type="submit" class={styles.loginButton}>Login</button>
            <div class="line"></div>
            {error() && <p class={styles.errorMessage}>{error()}</p>}
          </form>
          <div class={styles.socialLogin}>
          
            <button class={`${styles.socialButton} ${styles.facebookButton}`}>
              <i class="fab fa-facebook-f"></i> Log In with Facebook
            </button>
            <button class={`${styles.socialButton} ${styles.googleButton}`}>
              <i class="fab fa-google"></i> Log In with Google
            </button>
            <button class={`${styles.socialButton} ${styles.appleButton}`}>
              <i class="fab fa-apple"></i> Log In with Apple
            </button>
          </div>
          <p class={styles.registerText}>
            Belum punya akun? <A href="/register" class={styles.registerLink}>Daftar</A>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
