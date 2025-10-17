// import React, { useState } from "react";
// import styles from "./styles/PricingComparisonSection.module.css";

// const appsList = [
//     { name: "Project", icon: "📁", pricePerUser: 20 },
//     { name: "Accounting", icon: "📊", pricePerUser: 76 },
//     { name: "eCommerce", icon: "🛒", pricePerUser: 50 },
//     { name: "CRM", icon: "🤝", pricePerUser: 165 },
//     { name: "Discuss", icon: "💬", pricePerUser: 14.1 },
//     { name: "HR", icon: "👨‍💼", pricePerUser: 38 },
//     { name: "Sign", icon: "✍️", pricePerUser: 25 },
//     { name: "Inventory", icon: "📦", pricePerUser: 70 },
//     { name: "Website", icon: "🌐", pricePerUser: 25 },
//     { name: "Documents", icon: "📄", pricePerUser: 30 },
//     { name: "Billing", icon: "🧾", pricePerUser: 60 },
//     { name: "Reports", icon: "📈", pricePerUser: 45 },
//     { name: "GST Filing", icon: "💰", pricePerUser: 55 },
//     { name: "Expenses", icon: "💳", pricePerUser: 40 },
//     { name: "Helpdesk", icon: "🎧", pricePerUser: 50 },
//     { name: "Events", icon: "🎟️", pricePerUser: 35 },
//     { name: "Social", icon: "📱", pricePerUser: 20 },
//     { name: "Planning", icon: "📅", pricePerUser: 25 },
//     { name: "Timesheet", icon: "🕒", pricePerUser: 30 },
//     { name: "Emailing", icon: "✉️", pricePerUser: 20 },
// ];

// const PricingComparisonSection = () => {
//     const [selectedApps, setSelectedApps] = useState([]);
//     const [users, setUsers] = useState(20);

//     const handleAppClick = (appName) => {
//         setSelectedApps((prev) =>
//             prev.includes(appName)
//                 ? prev.filter((a) => a !== appName)
//                 : [...prev, appName]
//         );
//     };

//     const totalCost = selectedApps.reduce((acc, name) => {
//         const app = appsList.find((a) => a.name === name);
//         return acc + (app ? app.pricePerUser * users : 0);
//     }, 0);

//     const odooCost = 99990; // yearly cost for IndiaBills
//     const yearlyCost = totalCost * 12;
//     const savings = yearlyCost - odooCost;

//     return (
//         <div className={styles.wrapper}>
//             <div className={styles.left}>
//                 <h2>
//                     Cut costs with <span>IndiaBills</span>
//                 </h2>
//                 <p>Cost savings based on average price per user for each app.</p>

//                 <div className={styles.appGrid}>
//                     {appsList.map((app) => (
//                         <div
//                             key={app.name}
//                             className={`${styles.appCard} ${selectedApps.includes(app.name) ? styles.active : ""
//                                 }`}
//                             onClick={() => handleAppClick(app.name)}
//                         >
//                             <span className={styles.icon}>{app.icon}</span>
//                             <p>{app.name}</p>
//                             <span className={` ${styles.tick} ${selectedApps.includes(app.name) ? styles.tickActive : ""
//                                 } `} >✓</span>
//                         </div>
//                     ))}
//                 </div>

//                 <div className={styles.userCount}>
//                     <p>How many users?</p>
//                     <div className={styles.counter}>
//                         <button
//                             onClick={() => setUsers((prev) => Math.max(prev - 1, 1))}
//                             className={styles.btn}
//                         >
//                             -
//                         </button>
//                         <span>{users}</span>
//                         <button
//                             onClick={() => setUsers((prev) => prev + 1)}
//                             className={styles.btn}
//                         >
//                             +
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             <div className={styles.right}>
//                 <h3>Apps to replace</h3>
//                 <ul>
//                     {selectedApps.map((name) => {
//                         const app = appsList.find((a) => a.name === name);
//                         return (
//                             <li key={name}>
//                                 <span>{name}</span>
//                                 <span>
//                                     ₹{app.pricePerUser} / user <small>/month</small>
//                                 </span>
//                             </li>
//                         );
//                     })}
//                 </ul>
//                 <hr />
//                 <p className={styles.total}>
//                     TOTAL: <strong>₹{yearlyCost.toLocaleString()}/year</strong>
//                 </p>

//                 <div className={styles.odooBox}>
//                     <p>All IndiaBills Apps</p>
//                     <p>
//                         TOTAL: <strong>₹{odooCost.toLocaleString()}/year</strong>
//                     </p>
//                 </div>

//                 <div className={styles.savingsBox}>
//                     <p>Your savings</p>
//                     <h2>₹{savings.toLocaleString()}/year</h2>
//                     <p>For a fully integrated software</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PricingComparisonSection;
