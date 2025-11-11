import React, { useState } from "react";
import styles from "./styles/BlogCard.module.css";
import { useNavigate } from "react-router-dom";
import exImage from "../../assets/images/headerImg.jpg";
import api from "../../api/api"; // your shared axios instance

const BlogCard = ({ id, title, subtitle, date, image_url, category, onDelete }) => {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

  // Navigate to single blog page
  const handleClick = () => {
    navigate(`/blogs/${id}`);
  };

  // Toggle edit/delete options
  const handleEditMenu = (e) => {
    e.stopPropagation(); // prevent navigation when clicking edit icon
    setShowOptions((prev) => !prev);
  };

  // Navigate to edit page
  const handleEdit = (e) => {
    e.stopPropagation();
    navigate(`/blogs/edit/${id}`);
  };

  // Delete blog
  const handleDelete = async (e) => {
    e.stopPropagation();
    try {
      await api.delete(`/blogs/${id}`);
      alert("Blog deleted successfully!");
      console.log(`Blog delete: ${id}`)
      if (onDelete) onDelete(id); // trigger re-fetch or local removal
    } catch (error) {
      console.error(error);
      alert("Failed to delete blog!");
    }
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.imageContainer}>
        <img src={ image_url ? `${backendUrl}${image_url}` : exImage} alt={title} className={styles.image} />
        <span className={styles.category}>{category}</span>

        {/* Edit menu trigger */}
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
          <button className={styles.readMore}>Read More →</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
