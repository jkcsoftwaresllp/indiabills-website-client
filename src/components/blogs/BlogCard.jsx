import React from "react";
import styles from "./styles/BlogCard.module.css";
import { useNavigate } from "react-router-dom"; // for navigation to full blog page

const BlogCard = ({ id, title, subtitle, date, image, category }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blogs/${id}`); // navigate to blog details page (we’ll create it later)
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      {/* Blog Image */}
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        <span className={styles.category}>{category}</span>
      </div>

      {/* Blog Info */}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.footer}>
          <span className={styles.date}>{date}</span>
          <button className={styles.readMore}>Read More →</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
