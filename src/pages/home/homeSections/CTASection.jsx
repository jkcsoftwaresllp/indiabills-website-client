import React, { useEffect, useRef } from "react";
import styles from "./styles/CTASection.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CommonButton from "../../../components/buttons/CommonButton";

gsap.registerPlugin(ScrollTrigger);

const ScrollingTextCTA = () => {
  const containerRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left to right
      gsap.fromTo(
        line1Ref.current,
        { x: "-45%" },
        {
          x: "65%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Right to left
      gsap.fromTo(
        line2Ref.current,
        { x: "60%" },
        {
          x: "-60%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={styles.container}>
      <h1 ref={line1Ref} className={`${styles.text} ${styles.line1}`}>
        POWERING BUSINESSES WITH EASE
      </h1>
      <h1 ref={line2Ref} className={`${styles.text} ${styles.line2}`}>
        INDIABILLS – SMART. SIMPLE. SECURE.
      </h1>

      <div className={styles.ctaContainer}>
        {/* <button className={styles.ctaButton}>Get Started</button> */}
        <CommonButton white={1} />
      </div>
    </section>
  );
};

export default ScrollingTextCTA;
