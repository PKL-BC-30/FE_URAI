import { Component, createSignal } from 'solid-js';
import { useNavigate } from "@solidjs/router";
import styles from './register.module.css';
import Navbar from "./pages/navbar";
import { A } from "@solidjs/router";
import { users, setUsers } from './admin/store'; // Correctly import the store

const Register: Component = () => {
  const [username, setUsername] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [confirmPassword, setConfirmPassword] = createSignal('');
  const [error, setError] = createSignal('');
  const [successMessage, setSuccessMessage] = createSignal(''); // State for success message
  const navigate = useNavigate();

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (password() !== confirmPassword()) {
      setError('Passwords do not match');
      return;
    }

    const newUser = {
      id: users.length + 1,
      username: username(),
      email: email(),
      password: password(),
    };

    setUsers([...users, newUser]);

    console.log('User registered:', { username: username(), email: email() });
    setError('');
    setSuccessMessage('Registration successful!'); // Set success message
    setTimeout(() => {
      setSuccessMessage(''); // Clear success message after a few seconds
      navigate('/');
    }, 3000); // Navigate to home page after 3 seconds
  };

  return (
    <div class={styles.registerPage}>
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
              <label for="username">Username:</label>
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
              <label for="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email()}
                onInput={(e) => setEmail(e.target.value)}
                class={styles.inputField}
                required
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
                required
              />
            </div>
            <div class={styles.formGroup}>
              <label for="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword()}
                onInput={(e) => setConfirmPassword(e.target.value)}
                class={styles.inputField}
                required
              />
            </div>
            {error() && <p class={styles.errorMessage}>{error()}</p>}
            {successMessage() && <p class={styles.successMessage}>{successMessage()}</p>} {/* Show success message */}
            <button type="submit" class={styles.loginButton}>Register</button>
          </form>
          <div class={styles.socialLogin}>
            <p>atau</p>
            <button class={`${styles.facebookButton} ${styles.facebookButton}`}>
              <i class="fab fa-facebook-f"></i> Log In with Facebook
            </button>
            <button class={`${styles.googleButton} ${styles.googleButton}`}>
              <i class="fab fa-google"></i> Log In with Google
            </button>
            <button class={`${styles.appleButton} ${styles.appleButton}`}>
              <i class="fab fa-apple"></i> Log In with Apple
            </button>
          </div>
          <p class={styles.registerText}>
            Sudah punya akun? <A href="/login" class={styles.registerLink}>Login</A>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
