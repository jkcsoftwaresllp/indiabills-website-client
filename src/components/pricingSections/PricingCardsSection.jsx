import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles/PricingCardsSection.module.css";
import Lottie from "lottie-react";
import coinAnimation from "../../assets/lottie/Coin.json";
import MainContainer from "../containers/mainContainer/MainContainer";

const pricingPlans = [
  {
    name: "Standard",
    price: { monthly: "₹1,999", yearly: "₹1,9990" },
    featuresAvailable: ["Setup Assistance", "Live Testing"],
    featuresUnavailable: ["Product Listing", "Inventory Update", "Prior Data Import", "Priority Support"],
  },
  {
    name: "Business",
    price: { monthly: "₹5,999", yearly: "₹5,9990" },
    featuresAvailable: ["Setup Assistance", "Live Testing", "Product Listing", "Inventory Update", "Priority Support"],
    featuresUnavailable: ["Prior Data Import"],
    popular: true,
  },
  {
    name: "Business Plus",
    price: { monthly: "₹9,999", yearly: "₹9,9990" },
    featuresAvailable: ["Setup Assistance", "Live Testing", "Product Listing", "Inventory Update", "Priority Support", "Prior Data Import"],
    featuresUnavailable: [],
  },
];

const PricingCardsSection = () => {
  const [billing, setBilling] = useState("monthly");

  const toggleBilling = () => {
    setBilling(billing === "monthly" ? "yearly" : "monthly");
  };

  return (
    <MainContainer heading="Choose Your Plan" subHeading={"Choose a plan that fits your business — no hidden charges."} >
      {/* Billing Toggle */}
      <div className={styles.toggleContainer}>
        <span>Monthly</span>
        <label className={styles.switch}>
          <input type="checkbox" onChange={toggleBilling} />
          <span className={styles.slider}></span>
        </label>
        <span>Yearly</span>
      </div>

      {/* Pricing Cards */}
      <div className={styles.cardsContainer}>
        {pricingPlans.map((plan) => (
          <motion.div
            key={plan.name}
            className={`${styles.card} ${plan.popular ? styles.popular : ""}`}
            whileHover={{ y: -10, scale: plan.popular ? 1.12 : 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <motion.div
                className={styles.popularBadge}
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                Most Popular
              </motion.div>
            )}

            {/* Card Header */}
            <div className={styles.cardHeader}>
              <h3>{plan.name}</h3>
              <p className={styles.price}>{plan.price[billing]}</p>
            </div>

            {/* Optional Lottie for Popular Plan */}
            {plan.popular && (
              <div className={styles.lottieContainer}>
                <Lottie animationData={coinAnimation} loop />
              </div>
            )}

            {/* Features */}
            <ul className={styles.features}>
              {plan.featuresAvailable?.map((f) => (
                <li className={styles.featuresAvailable} key={f}>{f}</li>
              ))}
              {plan.featuresUnavailable?.filter(f => f).map((f) => (
                <li className={styles.featuresUnavailable} key={f} style={{ color: "#aaa", textDecoration: "line-through" }}>
                  {f}
                </li>
              ))}
            </ul>

            {/* Choose Plan Button */}
            <motion.button
              className={styles.button}
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 20px rgba(230,57,70,0.5)" }}
            >
              Choose Plan
            </motion.button>
          </motion.div>
        ))}
      </div>
    </MainContainer>
  );
};

export default PricingCardsSection;
