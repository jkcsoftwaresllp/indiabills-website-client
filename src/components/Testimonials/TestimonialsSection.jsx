import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./styles/TestimonialsSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { testimonials } from "./helper/testimonials";
import TestimonialCard from "./TestimonialCard";
import api from "../../api/api";
import TestimonialInvite from "../FeedbackButton/TestimonialInvite";
import { AdminContext } from "../../context/AdminContext";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    const el = sectionRef.current;

    // Animate heading and background shapes
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
  }, []);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await api.get("/testimonials/"  );
        setTestimonials(res.data);
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchTestimonials();
  }, []);



  return (
    <section className={styles.testimonialsSection} ref={sectionRef}>
      <div className={`${styles.bgShape} ${styles.bgShapeLeft}`} />
      <div className={`${styles.bgShape} ${styles.bgShapeRight}`} />

      <h2 className={styles.heading}>What Our Users Say</h2>

      <Swiper
        modules={[Autoplay, Pagination, EffectCoverflow]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 18,
          depth: 160,
          modifier: 1,
          slideShadows: false,
        }}
        loop
        slidesPerView={1.15}
        centeredSlides
        spaceBetween={28}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 28 },
        }}
        className={styles.swiperContainer}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <TestimonialCard testimonial={t} />
          </SwiperSlide>
        ))}
      </Swiper>
        <TestimonialInvite />
    </section>
  );
}
