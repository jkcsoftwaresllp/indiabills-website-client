import React, { useEffect, useRef } from "react";
import styles from "./styles/TestimonialsSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "./helper/testimonials";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    // Entrance animation for heading + background shapes
    gsap.fromTo(
      el.querySelectorAll(`.${styles.heading}, .${styles.bgShape}`),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      }
    );

    // Staggered fade-in for cards when they appear (for non-swiper reveal)
    gsap.fromTo(
      el.querySelectorAll(`.${styles.card}`),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      }
    );
  }, []);

  // Mouse tilt (per-card) using event handlers
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0 - 1
    const py = (e.clientY - rect.top) / rect.height; // 0 - 1
    const rotateY = (px - 0.5) * 16; // -8 to 8
    const rotateX = (0.5 - py) * 10; // -5 to 5
    const glareX = (px - 0.5) * 100; // for background position

    gsap.to(card, {
      rotationY: rotateY,
      rotationX: rotateX,
      scale: 1.03,
      transformPerspective: 900,
      transformOrigin: "center",
      ease: "power3.out",
      duration: 0.45,
    });

    // subtle inner gloss movement
    const gloss = card.querySelector(`.${styles.cardGloss}`);
    if (gloss) {
      gsap.to(gloss, {
        x: glareX,
        duration: 0.6,
        ease: "power3.out",
      });
    }
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
    if (gloss) {
      gsap.to(gloss, { x: 0, duration: 0.6, ease: "power3.out" });
    }
  };

  // Render stars for a testimonial.
  // Accepts: testimonial object `t` which may contain:
  // - t.stars: number (0-5) or string of star characters (e.g. "★★★")
  // - t.rating: number (optional)
  // Fallbacks to 5 stars when no rating provided.
  const renderStars = (t) => {
    const MAX = 5;
    let count = MAX;

    if (t == null) count = 0;
    else if (typeof t.stars === "number") count = t.stars;
    else if (typeof t.stars === "string") {
      // if string contains star characters, count them; otherwise use string length
      const onlyStars = (t.stars.match(/★/g) || []).length;
      count = onlyStars || t.stars.length || MAX;
    } else if (typeof t.rating === "number") {
      // round rating to nearest integer for display
      count = Math.round(t.rating);
    }

    // clamp between 0 and MAX
    count = Math.max(0, Math.min(MAX, Number(count) || 0));

    // produce filled and empty stars to always show MAX symbols
    const stars = [];
    for (let i = 0; i < MAX; i++) {
      stars.push(
        <span key={i} aria-hidden="true">
          {i < count ? "★" : "☆"}
        </span>
      );
    }
    return <>{stars}</>;
  };

  return (
    <section className={styles.testimonialsSection} ref={sectionRef}>
      {/* Soft floating shapes behind the content */}
      <div className={`${styles.bgShape} ${styles.bgShapeLeft}`} />
      <div className={`${styles.bgShape} ${styles.bgShapeRight}`} />

      <h2 className={styles.heading}>What Our Users Say</h2>

      <Swiper
        modules={[Autoplay, Pagination, EffectCoverflow]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 18,
          stretch: 0,
          depth: 160,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        slidesPerView={1.15}
        centeredSlides={true}
        spaceBetween={28}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 28 },
        }}
        className={styles.swiperContainer}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <article
              className={styles.card}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              aria-label={`Testimonial by ${t.name}`}
            >
              {/* glossy moving layer */}
              <div className={styles.cardGloss} aria-hidden="true" />
              <div className={styles.cardTop}>
                <div className={styles.avatarWrap}>
                  {t.image ? (
                    <img src={t.image} alt={t.name} className={styles.avatar} />
                  ) : (
                    <div className={styles.avatarPlaceholder}>
                      {t.name.charAt(0)}
                    </div>
                  )}
                </div>

                <div className={styles.meta}>
                  <h4 className={styles.name}>{t.name}</h4>
                  <p className={styles.role}>{t.role}</p>
                </div>

                <div className={styles.quoteIcon} aria-hidden="true">
                  {/* simple quote SVG */}
                  <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6 0H0v11.4C0 17.1 3.9 21 9.6 21 16.6 21 21 16.6 21 9.6V2.4C21 .9 19.6 0 18.1 0H10.6z" fill="#e63946" />
                  </svg>
                </div>
              </div>

              <p className={styles.text}>"{t.text}"</p>

              <div className={styles.cardFooter}>
                <div className={styles.rating} aria-hidden="true">
                  {/* stars based on testimonial data */}
                  {renderStars(t)}
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
