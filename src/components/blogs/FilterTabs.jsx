import React from "react";
import styles from "./styles/FilterTabs.module.css";

const FilterTabs = ({ categories, activeCategory, onFilterChange }) => {
  return (
    <div className={styles.tabsContainer}>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.tabButton} ${activeCategory === category ? styles.active : ""
            }`}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
