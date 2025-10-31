import React, { useState, useEffect } from 'react';
import styles from './styles/FlipTile.module.css';

function FlipTile({ title, description, logo, para }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClick = () => {
        if (isMobile) setIsFlipped(prev => !prev);
    };

    return (
        <div
            className={`${styles.flipCard} ${isMobile && isFlipped ? styles.mobileFlipped : ''}`}
            onClick={handleClick}
        >
            <div className={styles.flipInner}>
                <div className={styles.flipFront}>
                    {logo ? <img src={logo} alt="tile icon" className={styles.logo} /> : <h1>{title}</h1>}
                    <p>{description}</p>
                </div>
                <div className={styles.flipBack}>
                    <p>{para}</p>
                </div>
            </div>
        </div>
    );
}

export default FlipTile;
