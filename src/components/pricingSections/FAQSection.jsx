import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles/PricingFAQSection.module.css";
import MainContainer from "../containers/mainContainer/MainContainer";


const FAQSection = ({faqs, Title }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [glowIndex, setGlowIndex] = useState(null); // temporary glow state

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);

    // Trigger temporary glow
    setGlowIndex(index);
    setTimeout(() => setGlowIndex(null), 1500); // glow for 1.5 seconds
  };

  return (
    <MainContainer heading={ Title || "Frequently Asked Questions"}>
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`${styles.faqItem} ${
              activeIndex === index ? styles.active : ""
            } ${glowIndex === index ? styles.glowEffect : ""}`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <button
              className={styles.question}
              onClick={() => toggleAccordion(index)}
            >
              <span>{faq.question}</span>
              <motion.span
                animate={{
                  rotate: activeIndex === index ? 45 : 0,
                  scale: activeIndex === index ? 1.2 : 1,
                }}
                transition={{ duration: 0.3 }}
                className={styles.plus}
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  className={styles.answer}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </MainContainer>
  );
};

export default FAQSection;
