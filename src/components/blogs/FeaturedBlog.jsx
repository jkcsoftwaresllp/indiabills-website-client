import React from "react";
import styles from "./styles/FeaturedBlog.module.css";
import { useNavigate } from "react-router-dom";

const FeaturedBlog = ({ id, title, subtitle, author, date, image, category }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blogs/${id}`);
  };

  return (
    <section className={styles.featured} onClick={handleClick}>
      {/* Left side image */}
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>

      {/* Right side content */}
      <div className={styles.content}>
        <span className={styles.category}>{category}</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>

        <div className={styles.meta}>
          <span className={styles.author}>By {author}</span>
          <span className={styles.dot}>•</span>
          <span className={styles.date}>{date}</span>
        </div>

        <button className={styles.readMore}>Read Full Article →</button>
      </div>
    </section>
  );
};

export default FeaturedBlog;
