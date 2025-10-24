import React from 'react'
import styles from "./styles/HeroSection2.module.css";
import AutoSlideTile from '../Tiles/AutoSlideTile';

function HeroSection2({ title, subtitle }) {
    return (
        <>
        <div className={styles.Container} >
            <h1>
                {title}
                <p>{subtitle}</p>
            </h1>
        </div>
        <AutoSlideTile />
        </>
    )
}

export default HeroSection2
