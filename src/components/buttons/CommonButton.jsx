import React from 'react'
import styles from "./styles/CommonButton.module.css";
import { useNavigate } from 'react-router-dom';

function CommonButton({ label, white, navigateLink, onClick }) {

    const navigate = useNavigate();
    const handleClick = () => {
        if (onClick) onClick();
        else if (navigateLink) navigate(navigateLink);
    };

    return (
        <button type='button' className={` ${styles.button}  ${white ? styles.whiteButton : ""}  `} onClick={handleClick} >
            {label || "Start Free Trial"}
        </button>
    )
}

export default CommonButton
