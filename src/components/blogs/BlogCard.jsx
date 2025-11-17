import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/BlogCard.module.css";
import exImage from "../../assets/images/headerImg.jpg";
import api from "../../api/api";

const BlogCard = ({ id, title, subtitle, date, image_url, category, onDelete }) => {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const handleClick = () => navigate(`/blogs/${id}`);
  const handleEditMenu = (e) => {
    e.stopPropagation();
    setShowOptions((prev) => !prev);
  };
  const handleEdit = (e) => {
    e.stopPropagation();
    navigate(`/blogs/edit/${id}`);
  };
  const handleDelete = async (e) => {
    e.stopPropagation();
    try {
      await api.delete(`/blogs/${id}`);
      alert("Blog deleted successfully!");
      if (onDelete) onDelete(id);
    } catch (error) {
      console.error(error);
      alert("Failed to delete blog!");
    }
  };

  return (
    <div
      className={`${styles.card} ${isVisible ? styles.visible : ""}`}
      onClick={handleClick}
    >
      <div className={styles.imageContainer}>
        <img
          src={image_url ? `${backendUrl}${image_url}` : exImage}
          alt={title}
          className={styles.image}
        />
        <div className={styles.overlay}></div>
        <span className={styles.category}>{category}</span>
        <div className={styles.edit} onClick={handleEditMenu}>
          ⋮
          {showOptions && (
            <div className={styles.dropdown}>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          )}
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.footer}>
          <span className={styles.date}>{date}</span>
          <button className={styles.readMore}>
            Read More <span className={styles.arrow}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
