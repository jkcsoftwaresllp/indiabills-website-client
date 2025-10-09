import React, { useEffect, useRef } from "react";
import styles from "./styles/WhyChooseIndiaBills.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import dashboardLottie from '../../../assets/Dashboard.json';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { title: "Easy to Use", desc: "No technical knowledge required" },
  { title: "24x7 Support", desc: "Always here to help" },
  { title: "Trusted by Thousands", desc: "Businesses across India rely on us" },
  { title: "99.9% Data Uptime", desc: "Reliable and secure" },
  { title: "Customizable Plans", desc: "Tailored to your business needs" },
];

const WhyChooseIndiaBills = () => {
  const featureRefs = useRef([]);
  const lottieRef = useRef(null);

  useEffect(() => {
    // Float animation for Lottie
    if (lottieRef.current) {
      gsap.to(lottieRef.current, {
        y: -15,
        duration: 2.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }

    // Animate feature points on scroll
    featureRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <section className={styles.container}>
      {/* Left Section: Lottie Animation */}
      <div className={styles.left}>
        <div className={styles.lottieWrapper} ref={lottieRef}>
          <Lottie animationData={dashboardLottie} loop={true} />
        </div>
      </div>

      {/* Right Section: Feature List */}
      <div className={styles.right}>
        <h2 className={styles.heading}>Why Choose IndiaBills</h2>
        <p className={styles.subheading}>
          Empowering businesses with smarter billing solutions
        </p>
        <div className={styles.featuresList}>
          {features.map((feature, i) => (
            <div
              key={i}
              ref={(el) => (featureRefs.current[i] = el)}
              className={styles.featureItem}
            >
              <span className={styles.check}>✔</span>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseIndiaBills;
