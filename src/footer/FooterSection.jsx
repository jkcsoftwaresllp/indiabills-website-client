import React, { useEffect, useRef } from "react";
import styles from "./styles/FooterSection.module.css";
import { gsap } from "gsap";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const FooterSection = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    // Ensure opacity animates fully to 1
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <footer ref={footerRef} className={styles.footer}>
      <div className={styles.container}>
        {/* Logo & Description */}
        <div className={styles.about}>
          <h2 className={styles.logo}>JKC Softwares LLP</h2>
          <p>
            Empowering businesses with innovative software solutions. Building
            seamless digital experiences across web and mobile platforms.
          </p>
          <div className={styles.socials}>
            <a href="https://x.com/jkcsoftwares" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/jkcsoftwares/" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/company/jkcsoftwares/" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/jkcsoftwares/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/features">Features</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/support">Get Support</a></li>
            <li><a href="/company">Company</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.contact}>
          <h3>Contact</h3>
          <p>📞 +91 7322005500</p>
          <p>✉️ team@jkcsoftwares.com</p>
          <p>
            🏢 Kumar Commercial Complex, Opp. Gate No. 10
            <br />
            Gandhi Maidan, Exhibition Road
            <br />
            Patna, India 800001
          </p>
        </div>
      </div>

      <div className={styles.copy}>
        &copy; {new Date().getFullYear()} JKC Softwares LLP. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
