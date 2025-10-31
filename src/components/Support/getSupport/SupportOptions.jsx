import React from "react";
import styles from "./styles/SupportOptions.module.css";
import emailIcon from "../../../assets/images/mail.png";
import callIcon from "../../../assets/images/callSupport.png";
import messageIcon from "../../../assets/images/chat.png";
import MainContainer from "../../containers/mainContainer/MainContainer";
import CommonButton from "../../buttons/CommonButton";

const SupportOptions = () => {
  return (
    <MainContainer
      heading="Need Help? We're Here for You"
      subHeading="Connect with our IndiaBills support team through your preferred channel."
    >
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <img src={messageIcon} alt="Message Support" className={styles.icon} />
          <h3 className={styles.cardTitle}>Send a Message</h3>
          <p className={styles.cardDesc}>
            Fill out a quick form and our team will get back to you as soon as possible.
          </p>
          <CommonButton label="Send Message" white={1} />
        </div>

        <div className={styles.card}>
          <img src={emailIcon} alt="Email Support" className={styles.icon} />
          <h3 className={styles.cardTitle}>Email Support</h3>
          <p className={styles.cardDesc}>
            Write to support@indiabills.in — our team usually responds within 24 hours.
          </p>
          <a href="mailto:support@indiabills.in" className={styles.cardBtn}>
            Email Us
          </a>
        </div>

        <div className={styles.card}>
          <img src={callIcon} alt="Call Support" className={styles.icon} />
          <h3 className={styles.cardTitle}>Call Support</h3>
          <p className={styles.cardDesc}>
            Speak directly with our experts. Available Mon–Sat, 10 AM to 6 PM IST.
          </p>
          <a href="tel:+919876543210" className={styles.cardBtn}>
            Call Now
          </a>
        </div>
      </div>
    </MainContainer>
  );
};

export default SupportOptions;
