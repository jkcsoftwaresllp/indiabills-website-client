import React, { useEffect, useRef } from "react";
import styles from "./styles/HeroSection.module.css";
import { gsap } from "gsap";
import Lottie from "lottie-react";
import billingAnimation from "../../assets/billing-3d.json"; 

function HeroSection() {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Animate text on load
    gsap.fromTo(
      textRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
      }
    );

    // Floating animation for illustration
    gsap.to(imgRef.current, {
      y: -15,
      duration: 2.5,
      yoyo: true,
      repeat: -1,
      ease: "easeInOut",
    });
  }, []);

  return (
    <section className={styles.heroSection}>
      {/* Left Content */}
      <div className={styles.heroLeft} ref={textRef}>
        <h1>Smart Billing & Inventory for Growing Businesses</h1>
        <p>
          IndiaBills helps you manage billing, GST invoices, inventory &
          reporting seamlessly.
        </p>

        <div className={styles.ctaButtons}>
          <button className={styles.startBtn}>Start Free Trial</button>
          <button className={styles.demoBtn}>Watch Demo</button>
        </div>
      </div>

      {/* Right Illustration */}
      <div className={styles.heroRight} ref={imgRef}>
        <Lottie animationData={billingAnimation} loop={true} />
      </div>

      {/* Decorative Glow Background */}
      <div className={styles.glowCircle}></div>
    </section>
  );
}

export default HeroSection;
