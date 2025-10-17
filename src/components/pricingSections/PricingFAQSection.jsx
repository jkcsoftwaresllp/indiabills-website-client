import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles/PricingFAQSection.module.css";
import MainContainer from "../containers/mainContainer/MainContainer";

const faqs = [
  {
    question: "Can I switch between monthly and yearly billing anytime?",
    answer:
      "Yes! You can switch your billing cycle anytime from your account settings. The remaining balance will be adjusted automatically.",
  },
  {
    question: "Is there any setup fee or hidden charges?",
    answer:
      "No, there are no setup fees or hidden charges. What you see in the pricing plans is exactly what you pay.",
  },
  {
    question: "Which plan is best for me?",
    answer:
      "If you’re just starting, the Standard plan is perfect. For expanding businesses needing more control, go with Business or Business Plus.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely! You can cancel your subscription at any time. Your data remains secure and exportable even after cancellation.",
  },
  {
    question: "Do I get support with every plan?",
    answer:
      "Yes! All plans include basic support, but Business and Business Plus get priority response time and dedicated assistance.",
  },
];

const PricingFAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [glowIndex, setGlowIndex] = useState(null); // temporary glow state

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);

    // Trigger temporary glow
    setGlowIndex(index);
    setTimeout(() => setGlowIndex(null), 1500); // glow for 1.5 seconds
  };

  return (
    <MainContainer heading="Frequently Asked Questions">
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

export default PricingFAQSection;
