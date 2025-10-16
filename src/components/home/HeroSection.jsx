import React, { useEffect, useRef } from "react";
import styles from "./styles/HeroSection.module.css";
import { gsap } from "gsap";
import Lottie from "lottie-react";
import { TypeAnimation } from "react-type-animation";
import billingAnimation from "../../assets/lottie/billing-3d.json";
import CommonButton from "../buttons/CommonButton";

function HeroSection({ title, desc, typeWriterText1, typeWriterText2, typeWriterText3, lottie }) {
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
        <h1>
          {title || "Smart Billing & Inventory for" } <br />
          <span className={styles.typewriter}>
            <TypeAnimation
              sequence={[
                typeWriterText1 || "Fast Businesses" ,
                2000,
                "",
                300,
                typeWriterText2 || "Reliable Teams",
                2000,
                "",
                300,
                typeWriterText3 || "Rising Brands",
                2000,
                "",
                300,
              ]}
              wrapper="span"
              speed={70}
              repeat={Infinity}
            />
          </span>
        </h1>

        <p>
          {desc || `IndiaBills helps you manage billing, GST invoices, inventory & reporting seamlessly.`}
        </p>

        <div className={styles.ctaButtons}>
          <CommonButton />
          <CommonButton label={"Watch Demo"} white={1} />
        </div>
      </div>

      {/* Right Illustration */}
      <div className={styles.heroRight} ref={imgRef}>
        <Lottie animationData={lottie || billingAnimation } loop={true} />
      </div>

      {/* Decorative Glow Background */}
      <div className={styles.glowCircle}></div>
    </section>
  );
}

export default HeroSection;
