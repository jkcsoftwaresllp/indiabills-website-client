import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import styles from "./styles/FeaturesOverview.module.css";
import { features } from "./helper/features";
import FeatureTile from "../../../components/Tiles/FeatureTile";
import MainContainer from "../../../components/containers/mainContainer/MainContainer";

export default function FeaturesOverview() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) setVisible(true);
  }, [inView]);

  return (
    <MainContainer
      id="features"
      heading="Features Overview"
      subHeading="Everything you need to run your business efficiently"
    >
      <div className={styles.grid} ref={ref}>
        {features.map((f, i) => (
          <FeatureTile
            key={i}
            feature={f}
            delay={i * 0.1}
            visible={visible}
            navigate={navigate}
          />
        ))}
      </div>
    </MainContainer>
  );
}
