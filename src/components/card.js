import React, { useState, useEffect } from "react";
import check from "../assets/icon-check.svg";
const Card = () => {
  const [range, setRange] = useState(0);
  const [price, setPrice] = useState("");
  console.log(range);
  if (range > 25) {
    setPrice(16);
  }

  return (
    <article className="card">
      <h3>100K pageviews</h3>
      <div className="slide-container">
        <input
          type="range"
          className="range"
          min="0"
          max="100"
          step="25"
          value={range}
          onChange={(e) => setRange(e.target.value)}
        />
      </div>
      <h1>
        ${price}.00 <span className="month">/ month</span>
      </h1>
      <div className="billing">
        <h4>Monthly Billing</h4>
        <div className="switch">
          <input type="checkbox" className="checkbox" />
          <span className="slider"></span>
        </div>
        <h4>
          Yearly Billing <span className="discount">-25%</span>
        </h4>
      </div>
      <div className="underline"></div>
      <div className="services">
        <div>
          <img src={check} alt="check" className="check" />
          Unlimited websites
        </div>
        <div>
          <img src={check} alt="check" className="check" />
          100% data ownership
        </div>
        <div>
          <img src={check} alt="check" className="check" />
          Email reports
        </div>
      </div>
      <button className="btn">Start my trial</button>
    </article>
  );
};

export default Card;
