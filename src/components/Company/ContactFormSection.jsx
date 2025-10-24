import React, { useEffect, useRef } from "react";
import styles from "./styles/ContactFormSection.module.css";
import { useForm } from "react-hook-form";
import { gsap } from "gsap";
import contactIllustration from "../../assets/images/contact_illustration.jpg"; // Replace with your actual vector/illustration

const ContactFormSection = () => {
  const illustrationRef = useRef(null);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    // Floating illustration animation
    gsap.to(illustrationRef.current, {
      y: -20,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <section className={styles.container}>
      {/* Left Side Illustration */}
      <div className={styles.left}>
        <img
          ref={illustrationRef}
          src={contactIllustration}
          alt="Contact Support"
          className={styles.illustration}
        />
      </div>

      {/* Right Side Form */}
      <div className={styles.right}>
        <h2>Get in Touch</h2>
        <p>Have a question or need support? Fill out the form and our team will reach out to you shortly.</p>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.row}>
            <input
              type="text"
              placeholder="Full Name"
              {...register("fullName", { required: true })}
            />
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            {...register("subject", { required: true })}
          />

          <textarea
            placeholder="Message"
            rows="5"
            {...register("message", { required: true })}
          ></textarea>

          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
