
// src/components/Navbar.tsx
import { Component } from "solid-js";
import { Link } from "@solidjs/router";
import styles from "./navbar.module.css";
import logo from "./img/logo.svg";

const Navbar: Component = () => {
  return (
    <div class={styles.navbar}>
      <div class={styles.navbarLogo}>
        <img src={logo} alt="Logo" class={styles.logo} />
        <span class={styles.logoText}>URAI</span>
      </div>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/register">Register</Link></li>
        <li><Link href="/ag-grid">Admin</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
