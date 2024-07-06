// src/components/Login.tsx
import { Component } from "solid-js";
import { createSignal } from 'solid-js';
import { A, Link, useNavigate } from "@solidjs/router"; // Import useNavigate dan Link
import styles from './login.module.css'; // Import CSS module
import Navbar from "./pages/navbar"; // Import Navbar component
import '@fortawesome/fontawesome-free/css/all.css';

const Login: Component = () => {
  const [username, setUsername] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [error, setError] = createSignal('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (username() === 'i miss her' && password() === '123123') {
      console.log('Login successful');
      setError('');
      navigate('/home'); // Navigate to the home page
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div class={styles.loginPage}>
      <Navbar /> {/* Include Navbar */}
      <div class={styles.mainContainer}>
        <div class={styles.welcomeSection}>
        <h1 style="padding-bottom: -1px;color:greenyellow;padding-left: 14px;">Selamat Datang</h1>
          <p>Selamat datang di Urai, platform untuk mengelola sampah secara efisien.</p>
          <p>Silahkan login untuk masuk atau anda bisa register jika tidak mempunyai akun</p>
        </div>
        <div class={styles.loginContainer}>
          <form onSubmit={handleSubmit}>
            <div class={styles.formGroup}>
              <label for="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username()}
                onInput={(e) => setUsername(e.target.value)}
                class={styles.inputField}
              />
            </div>
            <div class={styles.formGroup}>
              <label for="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password()}
                onInput={(e) => setPassword(e.target.value)}
                class={styles.inputField}
              />
            </div>
            <div class={styles.formGroupCheckbox}>
              <input type="checkbox" id="rememberMe" name="rememberMe" class={styles.checkbox} />
              <label for="rememberMe">Ingatkan saya</label>
            </div>
            <button type="submit" class={styles.loginButton}>Login</button>
            {error() && <p class={styles.errorMessage}>{error()}</p>}
          </form>
          <div class={styles.socialLogin}>
            <p>atau</p>
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
