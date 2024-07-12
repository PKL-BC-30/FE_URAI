import { Component } from "solid-js";
import styles from "./insideNav.module.css"; // Import CSS file for styling
import { useNavigate } from "@solidjs/router";
import '@fortawesome/fontawesome-free/css/all.css';

const Sidebar: Component = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic here (e.g., removing token or login status)
    navigate("/login"); // Navigate to register page after logout
  };

  const handleTotal = () => {
    navigate("/total"); // Navigate to Total page
  };

  return (
    <div class={styles.sidebar}>
      <ul>
      <i class={`fas fa-user ${styles.userIcon}`}></i> {/* User icon with custom class */}
      </ul>
      <ul>
        <li>
          <a href="/homeA">
            <span class={styles.iconText}>Home</span>
          </a>
        </li>
      </ul>
      <ul>
        <li><a href="/home">Hitung</a></li>
      </ul>
      <ul>
        <li><a onClick={handleTotal}>Total</a></li>
      </ul>
      <ul>
        <li>
          <a onClick={handleLogout} class={styles.logoutLink}>Log-out</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
