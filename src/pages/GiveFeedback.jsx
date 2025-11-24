import React from "react";
import { useForm } from "react-hook-form";
import styles from "./styles/GiveFeedback.module.css";
import api from "../api/api";

function GiveFeedback() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Submitted Feedback:", data);
    
    // await api.post("/testimonials/create", data);

    await api.post("/testimonials", data);

    reset();
    alert("Thank you for sharing your feedback!");
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h2 className={styles.heading}>We Value Your Feedback ❤️</h2>
        <p className={styles.subText}>
          Your experience helps IndiaBills improve.  
          Please take a moment to share your thoughts.
        </p>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

          {/* Name */}
          <div className={styles.inputGroup}>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              {...register("name", { required: true })}
            />
            {errors.name && <span className={styles.error}>Name is required</span>}
          </div>

          {/* Role */}
          <div className={styles.inputGroup}>
            <label>Your Role / Profession</label>
            <input
              type="text"
              placeholder="Business Owner, Manager, etc."
              {...register("role", { required: true })}
            />
            {errors.role && (
              <span className={styles.error}>Role is required</span>
            )}
          </div>

          {/* Message */}
          <div className={styles.inputGroup}>
            <label>Your Message</label>
            <textarea
              rows="4"
              placeholder="Share your experience..."
              {...register("text", { required: true })}
            ></textarea>
            {errors.text && (
              <span className={styles.error}>Message is required</span>
            )}
          </div>

          {/* Rating */}
          <div className={styles.inputGroup}>
            <label>Rating (1 to 5)</label>
            <select {...register("rating", { required: true })}>
              <option value="">Select rating</option>
              <option value="1">⭐ 1 - Poor</option>
              <option value="2">⭐ 2 - Fair</option>
              <option value="3">⭐ 3 - Good</option>
              <option value="4">⭐ 4 - Very Good</option>
              <option value="5">⭐ 5 - Excellent</option>
            </select>
            {errors.rating && (
              <span className={styles.error}>Rating is required</span>
            )}
          </div>

          {/* Submit */}
          <button type="submit" className={styles.submitBtn}>
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default GiveFeedback;
