export const features = [
  { icon: "💳", title: "Billing & Invoicing", desc: "Create and manage invoices in seconds." },
  { icon: "👥", title: "Customer Management", desc: "Keep track of all your clients easily." },
  { icon: "📦", title: "Inventory Control", desc: "Monitor stock levels in real time." },
  { icon: "📈", title: "Reports & Analytics", desc: "Gain insights into business growth." },
  { icon: "🔐", title: "Data Security", desc: "Your business data is fully encrypted." },
  { icon: "💼", title: "Multi-User Access", desc: "Manage teams with controlled permissions." },
  { icon: "📊", title: "Performance Metrics", desc: "Track your business performance easily." },
  { icon: "➡️", title: "See All Features", desc: "Explore all features in detail.", seeAll: true }
];

// :root {
//   --primary-red: #e63946;
// }

// /* ✅ Section safely clipped — no horizontal scrollbars */
// .section {
//   width: 100%;
//   padding: 100px 20px;
//   text-align: center;
//   overflow-x: clip; /* ✅ modern fix */
//   overflow-y: hidden;
//   position: relative;
//   background: var(--primary-white);
// }

// .heading h2 {
//   font-size: 2.5rem;
//   font-weight: 700;
//   color: var(--primary-red);
//   font-family: var(--heading-font);
// }

// .heading p {
//   font-size: 1.1rem;
//   color: var(--text-light);
//   margin-top: 8px;
//   font-family: var(--para-font);
// }

// /* ✅ contain everything inside grid bounds */
// .grid {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
//   gap: 40px;
//   margin-top: 70px;
//   max-width: 1200px;
//   margin-left: auto;
//   margin-right: auto;
//   perspective: 1000px;
//   overflow: hidden; /* ✅ prevent overflow from 3D tilt */
//   /* background-color: rgb(185 28 28); */
//   padding: 20px 0;
// }

// .card {
//   background: var(--primary-white);
//   border-radius: 20px;
//   padding: 40px 24px;
//   box-shadow: 0 15px 35px rgba(230, 57, 70, 0.08);
//   border: 1px solid rgba(230, 57, 70, 0.2);
//   transform-style: preserve-3d;
//   transition: all 0.4s ease;
//   position: relative;
//   overflow: hidden;
//   height: 210px;
//   backface-visibility: hidden; /* ✅ prevent subpixel bleed from rotation */
// }

// /* ✅ fixed pseudo-element (no 200% overflow) */
// .card::before { content: ""; position: absolute; top: -100%; left: -100%; width: 200%; height: 200%; background: conic-gradient( from 180deg at 50% 50%, rgba(230, 57, 70, 0.2), rgba(255, 255, 255, 0), rgba(230, 57, 70, 0.2) ); opacity: 0; transition: opacity 0.4s ease; }

// .card:hover::before {
//   opacity: 1;
//   animation: rotateGlow 3s linear infinite;
// }

// @keyframes rotateGlow {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }

// .icon {
//   font-size: 2.8rem;
//   margin-bottom: 20px;
//   display: inline-flex;
//   justify-content: center;
//   align-items: center;
//   width: 70px;
//   height: 70px;
//   border-radius: 50%;
//   background: radial-gradient(circle at 30% 30%, #ffccd5, #ffe0e5);
//   color: var(--primary-red);
//   box-shadow: 0 8px 16px rgba(230, 57, 70, 0.15);
// }

// .card h3 {
//   font-size: 1.3rem;
//   font-weight: 600;
//   color: var(--primary-red);
//   font-family: var(--para-font);
// }

// .card p {
//   font-size: 1rem;
//   color: var(--text-light);
//   margin-top: 10px;
//   line-height: 1.6;
// }

// .glow {
//   position: absolute;
//   inset: 0;
//   background: radial-gradient(
//     circle at 30% 30%,
//     rgba(230, 57, 70, 0.08),
//     transparent 70%
//   );
//   pointer-events: none;
//   mix-blend-mode: overlay;
// }

// .card:hover {
//   transform: translateY(-10px) rotateX(2deg) rotateY(2deg);
//   box-shadow: 0 25px 50px rgba(230, 57, 70, 0.12);
// }

// /* ✅ Floating animation safely clipped */
// .card:nth-child(odd) {
//   animation: floatUpDown 4s ease-in-out infinite;
// }
// .card:nth-child(even) {
//   animation: floatUpDown 4s ease-in-out infinite 2s;
// }

// @keyframes floatUpDown {
//   0%,
//   100% {
//     transform: translateY(0) translateZ(0); /* ✅ prevents fractional overflow */
//   }
//   50% {
//     transform: translateY(-10px) translateZ(0);
//   }
// }

// @media (max-width: 768px) {
//   .section {
//     padding: 60px 16px;
//     width: 92%;
//   }
//   .heading h2 {
//     font-size: 2rem;
//   }
// }

// .circleButton {
//   position: absolute;
//   bottom: 15px;
//   left: 42%; /* ✅ center correctly */
//   transform: translateX(-50%);
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background-color: var(--primary-red);
//   color: var(--primary-white);
//   border: none;
//   font-size: 1.5rem;
//   cursor: pointer;
//   box-shadow: 0 8px 20px rgba(230, 57, 70, 0.3);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .circleButton:hover {
//   background-color: var();
// }

// /* ✅ global fallback */
// html,
// body {
//   overflow-x: hidden;
// }


