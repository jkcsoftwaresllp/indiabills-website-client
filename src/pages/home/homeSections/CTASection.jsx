import React, { useRef, useEffect } from "react";
import styles from "./styles/CTASection.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const ctaRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!ctaRef.current) return;

    // Section entrance animation
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    // Floating shapes animation
    gsap.to(".floatingShape", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 4,
      stagger: 0.5,
      ease: "sine.inOut",
    });

    // Button subtle glow loop
    gsap.to(buttonRef.current, {
      boxShadow: "0 0 40px rgba(230, 57, 70, 0.7)",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
    });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      scale: 1.12,
      boxShadow: "0 15px 35px rgba(230, 57, 70, 0.9)",
      rotationX: 5,
      rotationY: -5,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      boxShadow: "0 5px 15px rgba(230, 57, 70, 0.5)",
      rotationX: 0,
      rotationY: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div ref={ctaRef} className={styles.ctaSection}>
      {/* Floating background shapes */}
      <div className={`${styles.floatingShape} floatingShape`} style={{ top: '-40px', left: '20%' }} />
      <div className={`${styles.floatingShape} floatingShape`} style={{ top: '60px', right: '15%' }} />
      <div className={`${styles.floatingShape} floatingShape`} style={{ bottom: '-50px', left: '40%' }} />

      <h2 className={styles.heading}>
        Join 10,000+ businesses already using <span>IndiaBills</span>
      </h2>
      <button
        ref={buttonRef}
        className={styles.ctaButton}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Start Your Free Demo Now
      </button>
    </div>
  );
};

export default CTASection;
