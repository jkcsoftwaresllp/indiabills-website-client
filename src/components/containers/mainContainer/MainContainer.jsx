import React, { useRef } from "react";
import styles from "./styles/MainContainer.module.css";

function MainContainer({ heading, subHeading1, subHeading2, textInRed, children }) {

    return (
        <section className={styles.container}>
            <div>
                <h1>{heading}</h1>
                <h2>
                    {subHeading1}
                    <br />
                    {subHeading2}
                    <span>{textInRed}</span>
                </h2>
            </div>
            {children}
        </section>
    );
}

export default MainContainer;
