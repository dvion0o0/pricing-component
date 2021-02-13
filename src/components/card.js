import React from "react";
import check from "../assets/icon-check.svg";
import { useGlobalContext } from "../context api/context";
const Card = () => {
  const { range, price, setRange, handleToggle, page } = useGlobalContext();
  return (
    <article className="card">
      <h3>{page}K pageviews</h3>
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
        <label className="switch" htmlfor="checkbox">
          <input type="checkbox" id="checkbox" onChange={handleToggle} />
          <div className="slider"></div>
        </label>
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
