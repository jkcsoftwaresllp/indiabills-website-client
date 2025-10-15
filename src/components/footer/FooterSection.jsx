import React, { useEffect, useRef } from "react";
import styles from "./styles/FooterSection.module.css";
import { gsap } from "gsap";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const FooterSection = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <footer ref={footerRef} className={styles.footer}>
      <div className={styles.container}>
        {/* About Section */}
        <div className={styles.about}>
          <h2 className={styles.logo}>
            <span className={styles.redLine}></span> IndiaBills
          </h2>
          <p>
            Empowering businesses with innovative software solutions. Building
            seamless digital experiences across web and mobile platforms.
          </p>
          <div className={styles.socials}>
            <a href="https://x.com/jkcsoftwares" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://www.facebook.com/jkcsoftwares/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/company/jkcsoftwares/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/jkcsoftwares/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.links}>
          <h3><span className={styles.redLine}></span> Quick Links</h3>
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
          <h3><span className={styles.redLine}></span> Contact</h3>
          <p><FaPhoneAlt className={styles.icon} /> +91 7322005500</p>
          <p><FaEnvelope className={styles.icon} /> team@jkcsoftwares.com</p>
          <p>
            <FaMapMarkerAlt className={styles.icon} /> Kumar Commercial Complex, Opp. Gate No. 10<br />
            Gandhi Maidan, Exhibition Road<br />
            Patna, India 800001
          </p>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.copy}>
        &copy; {new Date().getFullYear()} <span>JKC Softwares LLP</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
