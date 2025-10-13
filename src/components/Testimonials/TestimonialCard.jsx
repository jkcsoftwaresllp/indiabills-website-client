import React from "react";
import styles from "./styles/TestimonialCard.module.css";
import StarsDisplay from "./StarsDisplay";
import { gsap } from "gsap";

export default function TestimonialCard({ testimonial }) {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 16;
    const rotateX = (0.5 - py) * 10;
    const glareX = (px - 0.5) * 100;

    gsap.to(card, {
      rotationY: rotateY,
      rotationX: rotateX,
      scale: 1.03,
      transformPerspective: 900,
      transformOrigin: "center",
      ease: "power3.out",
      duration: 0.45,
    });

    const gloss = card.querySelector(`.${styles.cardGloss}`);
    if (gloss) gsap.to(gloss, { x: glareX, duration: 0.6, ease: "power3.out" });
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    gsap.to(card, {
      rotationY: 0,
      rotationX: 0,
      scale: 1,
      duration: 0.6,
      ease: "power3.out",
    });
    const gloss = card.querySelector(`.${styles.cardGloss}`);
    if (gloss) gsap.to(gloss, { x: 0, duration: 0.6, ease: "power3.out" });
  };

  const { name, role, text, image } = testimonial;

  return (
    <article
      className={styles.card}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label={`Testimonial by ${name}`}
    >
      <div className={styles.cardGloss} aria-hidden="true" />

      <div className={styles.cardTop}>
        <div className={styles.avatarWrap}>
          {image ? (
            <img src={image} alt={name} className={styles.avatar} />
          ) : (
            <div className={styles.avatarPlaceholder}>{name.charAt(0)}</div>
          )}
        </div>

        <div className={styles.meta}>
          <h4 className={styles.name}>{name}</h4>
          <p className={styles.role}>{role}</p>
        </div>

        <div className={styles.quoteIcon}>
          <svg
            width="28"
            height="22"
            viewBox="0 0 28 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6 0H0v11.4C0 17.1 3.9 21 9.6 21 16.6 21 21 16.6 21 9.6V2.4C21 .9 19.6 0 18.1 0H10.6z"
              fill="#e63946"
            />
          </svg>
        </div>
      </div>

      <p className={styles.text}>"{text}"</p>

      <div className={styles.cardFooter}>
        <div className={styles.rating}>
          <StarsDisplay rating={testimonial.rating || 5} />
        </div>
      </div>
    </article>
  );
}
