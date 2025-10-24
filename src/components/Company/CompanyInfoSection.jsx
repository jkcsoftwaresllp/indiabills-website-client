import React, { useEffect, useRef } from "react";
import styles from "./styles/CompanyInfoSection.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const CompanyInfoSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(`.${styles.card}`);
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className={styles.container}>
      {/* Column 1 - Office Address */}
      <div className={styles.card}>
        <h3>🏢 IndiaBills HQ</h3>
        <p>Kumar Commercial Complex, Opp. Gate No. 10</p>
        <p>Gandhi Maidan, Exhibition Road</p>
        <p>Patna, Bihar, 800001</p>
        <a
          href="https://maps.google.com?q=Kumar+Commercial+Complex,+Patna"
          target="_blank"
          rel="noreferrer"
          className={styles.mapBtn}
        >
          View on Map
        </a>
      </div>

      {/* Column 2 - Contact Info */}
      <div className={styles.card}>
        <h3>📞 Contact Info</h3>
        <p className={styles.infoLine}>
          <FaPhoneAlt /> +91 7322005500
        </p>
        <p className={styles.infoLine}>
          <FaEnvelope /> team@jkcsoftwares.com
        </p>
        <p className={styles.infoLine}>
          <FaClock /> Mon – Sat: 10 AM – 7 PM
        </p>
      </div>

      {/* Column 3 - Social Links */}
      <div className={styles.card}>
        <h3>🌐 Connect With Us</h3>
        <div className={styles.socialIcons}>
          <a href="https://www.linkedin.com/company/jkcsoftwares/" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/jkcsoftwares/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://x.com/jkcsoftwares" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfoSection;
