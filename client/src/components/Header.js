import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <Link style={styles.logo} to="/">
        BookWorm
      </Link>
      <nav>
        <ul style={styles.menu}>
          <li style={styles.menuItem}>
            <Link style={styles.menuLink} to="/reviews">
              All Reviews
            </Link>
          </li>
          <li style={styles.menuItem}>
            <Link style={styles.menuLink} to="/about">
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "5vh",
    position: "absolute",
    width: "100%",
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "0 1em"
  },
  logo: {
    color: "black",
    fontSize: "1.5rem",
    fontWeight: "bold"
  },
  menu: {
    display: "flex",
    listStyle: "none"
  },
  menuItem: {
    marginLeft: "2em"
  },
  menuLink: {
    color: "white",
    fontWeight: "bold",
    fontSize: "1.1rem"
  }
};
