import React from "react";

export default function StarsDisplay({ rating = 5 }) {
  const MAX = 5;
  const count = Math.max(0, Math.min(MAX, Math.round(rating)));
  return (
    <>
      {[...Array(MAX)].map((_, i) => (
        <span key={i}>{i < count ? "★" : "☆"}</span>
      ))}
    </>
  );
}
