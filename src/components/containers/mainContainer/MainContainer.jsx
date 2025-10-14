import React from "react";
import { motion } from "framer-motion";
import styles from "./styles/MainContainer.module.css";

const MainContainer = ({ heading, subHeading, children, id }) => {
  return (
    <section className={styles.container} id={id}>
      <div className={styles.heading}>
        {heading && (
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {heading}
          </motion.h2>
        )}
        {subHeading && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {subHeading}
          </motion.p>
        )}
      </div>

      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default MainContainer;
