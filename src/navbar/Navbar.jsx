import React, { useState } from "react";
import styles from "./styles/Navbar.module.css";
import logo from "../assets/logo.png";
import { Menu, X, ChevronDown } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src={logo} alt="IndiaBills Logo" />
      </div>

      {/* Hamburger (Mobile) */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Left Section (Features, Pricing, Support, Blogs) */}
      <div
        className={`${styles.navLinks} ${menuOpen ? styles.navActive : ""}`}
      >
        <a href="#">Features</a>
        <a href="#">Pricing</a>

        {/* Support Dropdown */}
        <div
          className={styles.dropdown}
          onClick={() => setSupportOpen(!supportOpen)}
        >
          <button className={styles.dropdownBtn}>
            Support <ChevronDown size={16} />
          </button>
          <div
            className={`${styles.dropdownContent} ${
              supportOpen ? styles.showDropdown : ""
            }`}
          >
            <a href="#">Get Support</a>
            <a href="#">IndiaBills Product Training</a>
            <a href="#">IndiaBills Community</a>
          </div>
        </div>

        <a href="#">Blogs</a>
      </div>

      {/* Right Section */}
      <div className={styles.rightMenu}>
        <a href="#">Company</a>
        <button className={styles.demoBtn}>Start Demo / Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
