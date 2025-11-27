import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Lottie from "lottie-react";
import sparkleAnimation from "../../assets/lottie/Confetti.json";
import styles from "./styles/PricingCardsSection.module.css";
import MainContainer from "../containers/mainContainer/MainContainer";
import CommonButton from "../buttons/CommonButton";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";



// const pricingPlans = [
//   {
//     name: "Standard",
//     price: { monthly: "₹1,999", yearly: "₹19,990" },
//     description: "Perfect for small businesses just getting started",
//     featuresAvailable: ["Setup Assistance", "Live Testing"],
//     featuresUnavailable: ["Product Listing", "Inventory Update", "Prior Data Import", "Priority Support"],
//   },
//   {
//     name: "Business",
//     price: { monthly: "₹5,999", yearly: "₹59,990" },
//     description: "For growing businesses with more requirements",
//     featuresAvailable: ["Setup Assistance", "Live Testing", "Product Listing", "Inventory Update", "Priority Support"],
//     featuresUnavailable: ["Prior Data Import"],
//     popular: true,
//   },
//   {
//     name: "Business Plus",
//     price: { monthly: "₹9,999", yearly: "₹99,990" },
//     description: "For larger businesses with advanced needs",
//     featuresAvailable: [
//       "Setup Assistance",
//       "Live Testing",
//       "Product Listing",
//       "Inventory Update",
//       "Priority Support",
//       "Prior Data Import",
//     ],
//     featuresUnavailable: [],
//   },
// ];

const PricingCardsSection = () => {
  const [billing, setBilling] = useState("monthly");
  const [pricingPlans, setPricingPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    let isMounted = true; // prevents state update if component unmounts

    const fetchPricingPlans = async () => {
      try {
        setLoading(true);
        const res = await api.get("/pricing/", { withCredentials: true });
        if (isMounted) {
          setPricingPlans(res.data || []);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.response?.data?.message || "Failed to load pricing plans");
        }
        console.log(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchPricingPlans();

    return () => {
      isMounted = false;
    };
  }, []);

  const toggleBilling = () => setBilling(billing === "monthly" ? "yearly" : "monthly");

  return (
    <MainContainer
      heading="Choose Your Plan"
      subHeading="Choose a plan that fits your business — no hidden charges."
    >
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
          <HoverAnimatedCard plan={plan} billing={billing} key={plan.name} />
        ))}
      </div>
      <div className={styles.createBtn} >
        <CommonButton label={"Create Plans"} navigateLink={`/pricing/create`} />
      </div>
    </MainContainer>
  );
};

// 🪄 Separate animated card component
const HoverAnimatedCard = ({ plan, billing }) => {
  const ribbonRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [showOptions, setShowOptions] = useState(false)
  const navigate = useNavigate();

  const handleHoverStart = () => {
    setHovered(true);
    gsap.fromTo(
      ribbonRef.current,
      { rotate: -10, scale: 0.8, opacity: 0 },
      { rotate: 0, scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
    );
  };

  const handleHoverEnd = () => {
    setHovered(false);
    gsap.to(ribbonRef.current, { opacity: 0, scale: 0.8, duration: 0.3, ease: "power2.out" });
  };

  const handleEditMenu = () => {
    setShowOptions((prev) => !prev);
  }
  const handleEdit = (id) => {
    navigate(`/pricing/edit/${id}`);
  }
  const handleDelete = async (id) => {
    try {
      api.delete(`/pricing/${id}`);
      // setPricingPlans(prev => prev.filter(plan => plan.id !== id));
      window.location.reload();

      alert("Pricing plan deleted successfully!");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <motion.div
      className={`${styles.card} ${plan.popular ? styles.popular : ""}`}
      whileHover={{ y: -10, scale: plan.popular ? 1.12 : 1.06 }}
      transition={{ type: "spring", stiffness: 250 }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {/* 🎁 Animated Gift Ribbon Corner */}
      <div className={styles.cornerRibbon} ref={ribbonRef}>
        <div className={styles.shimmer}></div>
        {hovered && (
          <Lottie
            animationData={sparkleAnimation}
            loop={false}
            autoplay
            className={styles.sparkleAnimation}
          />
        )}
      </div>

      {/* ⭐ Popular Badge */}
      {plan.popular === 1 && (
        <motion.div
          className={styles.popularBadge}
          animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          Most Popular
        </motion.div>
      )}

      <div className={styles.cardHeader}>
        <h3>{plan.name}</h3>
        <p className={styles.price}>{billing === "monthly" ? plan.monthly_price : plan.yearly_price}</p>
        {/* <p className={styles.price}>{plan.price[billing]}</p> */}
        <span>{plan.description}</span>
      </div>

      <ul className={styles.features}>
        {plan.features_available.map((f) => (
          <li className={styles.featuresAvailable} key={f}>
            {f}
          </li>
        ))}
        {plan.features_unavailable.map(
          (f) =>
            f && (
              <li
                className={styles.featuresUnavailable}
                key={f}
                style={{ color: "#aaa", textDecoration: "line-through" }}
              >
                {f}
              </li>
            )
        )}
      </ul>

      {/* {isAdmin && */}
      <div className={styles.edit} onClick={handleEditMenu}>
        ⋮
        {showOptions && (
          <div className={styles.dropdown}>
            <button onClick={() => handleEdit(plan.id)}>Edit</button>
            <button onClick={() => handleDelete(plan.id)}>Delete</button>
          </div>
        )}
      </div>
      {/* } */}

      <CommonButton label="Choose Plan" white={1} />
    </motion.div>
  );
};

export default PricingCardsSection;
