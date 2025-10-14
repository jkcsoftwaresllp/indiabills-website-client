import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import styles from "./styles/FeatureTile.module.css";

export default function FeatureTile({ feature, delay, visible, navigate }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  const handleClick = () => {
    if (feature.seeAll) navigate("/features");
  };

  return (
    <motion.div
      className={styles.card}
      style={{ rotateX, rotateY, cursor: feature.seeAll ? "pointer" : "default" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className={styles.icon}
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {feature.icon}
      </motion.div>

      <h3>{feature.title}</h3>
      <p>{feature.desc}</p>
      <motion.div className={styles.glow} layoutId={`glow-${feature.title}`} />

      {!feature.seeAll && (
        <motion.button
          className={styles.circleButton}
          initial={{ y: 40, opacity: 0 }}
          animate={hovered ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          onClick={() => navigate("/features")}
        >
          ➔
        </motion.button>
      )}
    </motion.div>
  );
}
