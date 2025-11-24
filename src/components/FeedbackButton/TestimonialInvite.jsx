import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/TestimonialInvite.module.css";
import { AdminContext } from "../../context/AdminContext";

const TestimonialInvite = () => {
  const navigate = useNavigate();

  const { isAdmin } = useContext(AdminContext)

  const handleNavigate = () => {
    navigate("/give-feedback");
  };
  const handleNavigateAdmin = () => {
    navigate("/testimonials/admin/all");
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.quote}>
        “Your experience helps us grow.  
        Share your thoughts and help us serve you better.”
      </p>

      <button className={styles.linkBtn} onClick={handleNavigate}>
        Share Your Experience →
      </button>
      { isAdmin &&
      <button className={styles.linkBtn} onClick={handleNavigateAdmin}>
        See All Testimonials →
      </button>
      }
    </div>
  );
};

export default TestimonialInvite;
