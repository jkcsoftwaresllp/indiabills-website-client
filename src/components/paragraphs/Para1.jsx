import React from 'react'
import styles from './styles/Para1.module.css';
import image00 from '../../assets/images/img1.webp';
import CommonButton from '../buttons/CommonButton';

function Para1({ Title1, Title2, p1, p1_2, span1, p2, p2_2, span2, span3, image }) { // 0 for no image , pass image in image , otherwise nothing for default image
    return (
        <div className={styles.container}>
            <div className={styles.right} >
                <div className={styles.heading}>
                    <h1>{Title1}</h1>
                    <span>{Title2}</span>
                </div>
                <div className={styles.text} >
                    <p>{p1}<span>{span1}</span>{p1_2}</p>
                    <p>{p2}<span>{span2}</span>{p2_2}</p>
                    {/* <p><span>{span3}</span> <CommonButton /> </p> */}
                    <p><CommonButton label={"Start Product Training →"} white={1} /></p>
                </div>
            </div>

            <div className={styles.left}>
                {image !== 0 ? <img src={image ? image : image00} alt="" /> : ""}
            </div>

        </div>
    )
}

export default Para1
