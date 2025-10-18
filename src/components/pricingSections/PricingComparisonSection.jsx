import React, { useState } from "react";
import styles from "./styles/PricingComparisonSection.module.css";
import { appsList } from "./helper/appsList";

const PricingComparisonSection = () => {
    const [selectedApps, setSelectedApps] = useState(["Accounting","CRM","Discuss","Inventory","Website","Documents","Billing","Reports","Emailing"]);
    const [users, setUsers] = useState(25);

    const handleAppClick = (appName) => {
        setSelectedApps((prev) =>
            prev.includes(appName)
                ? prev.filter((a) => a !== appName)
                : [...prev, appName]
        );
    };

    const totalCost = selectedApps.reduce((acc, name) => {
        const app = appsList.find((a) => a.name === name);
        return acc + (app ? app.pricePerUser * users : 0);
    }, 0);

    const odooCost = 99990; // yearly cost for IndiaBills
    const yearlyCost = totalCost * 12;
    const savings = yearlyCost - odooCost;

    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <h2>
                    Cut costs with <span>IndiaBills</span>
                </h2>
                <p>Cost savings based on average price per user for each app.</p>

                <div className={styles.appGrid}>
                    {appsList.map((app) => (
                        <div
                            key={app.name}
                            className={`${styles.appCard} ${selectedApps.includes(app.name) ? styles.active : ""
                                }`}
                            onClick={() => handleAppClick(app.name)}
                        >
                            {/* <span className={styles.icon}>{app.icon}</span> */}
                            <span className={styles.icon}><img src={app.icon} alt="" /></span>
                            <p>{app.name}</p>
                            <span className={` ${styles.tick} ${selectedApps.includes(app.name) ? styles.tickActive : ""
                                } `} >✓</span>
                        </div>
                    ))}
                </div>

                <div className={styles.userCount}>
                    <p>How many users?</p>
                    <div className={styles.counter}>
                        <button
                            onClick={() => setUsers((prev) => Math.max(prev - 1, 1))}
                            className={styles.btn}
                        >
                            -
                        </button>
                        <span>{users}</span>
                        <button
                            onClick={() => setUsers((prev) => prev + 1)}
                            className={styles.btn}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.right}>
                <h3>Apps to replace</h3>
                <ul>
                    {selectedApps.map((name) => {
                        const app = appsList.find((a) => a.name === name);
                        return (
                            <li key={name}>
                                <span>{name}</span>
                                <span>
                                    ₹{app.pricePerUser} / user <small>/month</small>
                                </span>
                            </li>
                        );
                    })}
                </ul>
                <hr />
                <p className={styles.total}>
                    TOTAL: <strong>₹{yearlyCost.toLocaleString()}/year</strong>
                </p>

                <div className={styles.odooBox}>
                    <p>All IndiaBills Apps</p>
                    <p>
                        TOTAL: <strong>₹{odooCost.toLocaleString()}/year</strong>
                    </p>
                </div>

                <div className={styles.savingsBox}>
                    <p>Your savings</p>
                    <h2>₹{savings.toLocaleString()}/year</h2>
                    <p>For a fully integrated software</p>
                </div>
            </div>
        </div>
    );
};

export default PricingComparisonSection;
