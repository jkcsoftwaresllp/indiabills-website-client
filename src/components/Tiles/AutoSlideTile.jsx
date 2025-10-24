import React from 'react';
import styles from "./styles/AutoSlideTile.module.css";

function AutoSlideTile({ tileData }) {
  const defaultTiles = [
    "Accounting",
    "CRM",
    "HR Management",
    "Inventory",
    "E-Commerce",
    "Projects",
    "Documents",
    "Sign",
    "Discuss",
  ];

  // Use tileData if provided, else fallback to defaultTiles
  const tiles = tileData && tileData.length > 0 ? tileData : defaultTiles;

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <div className={styles.sliderTrack}>
          {[...tiles, ...tiles].map((item, index) => (
            <div key={index} className={styles.tile}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AutoSlideTile;
