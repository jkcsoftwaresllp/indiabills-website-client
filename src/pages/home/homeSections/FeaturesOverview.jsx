import { motion, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // for navigation
import styles from "./styles/FeaturesOverview.module.css";

const features = [
  { icon: "💳", title: "Billing & Invoicing", desc: "Create and manage invoices in seconds." },
  { icon: "👥", title: "Customer Management", desc: "Keep track of all your clients easily." },
  { icon: "📦", title: "Inventory Control", desc: "Monitor stock levels in real time." },
  { icon: "📈", title: "Reports & Analytics", desc: "Gain insights into business growth." },
  { icon: "🔐", title: "Data Security", desc: "Your business data is fully encrypted." },
  { icon: "💼", title: "Multi-User Access", desc: "Manage teams with controlled permissions." },
  { icon: "📊", title: "Performance Metrics", desc: "Track your business performance easily." },
  { icon: "➡️", title: "See All Features", desc: "Explore all features in detail.", seeAll: true }
];

export default function FeaturesOverview() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) setVisible(true);
  }, [inView]);

  return (
    <section className={styles.section} id="features" ref={ref}>
      <div className={styles.heading}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Features Overview
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Everything you need to run your business efficiently
        </motion.p>
      </div>

      <div className={styles.grid}>
        {features.map((f, i) => (
          <TiltCard
            key={i}
            f={f}
            delay={i * 0.1}
            visible={visible}
            navigate={navigate} // pass navigate
          />
        ))}
      </div>
    </section>
  );
}

function TiltCard({ f, delay, visible, navigate }) {
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
    if (f.seeAll) {
      navigate("/features"); // navigate to features page
    }
  };

  return (
    <motion.div
      className={styles.card}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      style={{ cursor: f.seeAll ? "pointer" : "default" }}
    >
      <motion.div
        className={styles.icon}
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {f.icon}
      </motion.div>
      <h3>{f.title}</h3>
      <p>{f.desc}</p>
      <motion.div className={styles.glow} layoutId={`glow-${f.title}`} />

      {!f.seeAll && (
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
