import { NavLink } from "react-router-dom";
import styles from "./AppBar.module.css";

const AppBar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default AppBar;