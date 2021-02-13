import React, { useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [range, setRange] = useState(0);
  const [price, setPrice] = useState("");
  const [page, setPage] = useState("");

  useEffect(() => {
    if (range <= 0) {
      setPrice(8);
      setPage(100);
    }
    if (range > 0 && range <= 25) {
      setPrice(16);
      setPage(200);
    }
    if (range > 25 && range <= 50) {
      setPrice(24);
      setPage(400);
    }
    if (range > 50 && range <= 75) {
      setPrice(32);
      setPage(650);
    }
    if (range > 75) {
      setPrice(40);
      setPage(1000);
    }
  }, [range]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setPrice((oldValue) => {
        const newPrice = oldValue - oldValue * 0.25;
        return newPrice;
      });
    } else {
      if (range === 0) {
        setPrice(8);
      }
      if (range > 0 && range <= 25) {
        setPrice(16);
      }
      if (range > 25 && range <= 50) {
        setPrice(24);
      }
      if (range > 50 && range <= 75) {
        setPrice(32);
      }
      if (range > 75) {
        setPrice(40);
      }
    }
  };

  return (
    <AppContext.Provider value={{ page, price, range, setRange, handleToggle }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppContext, AppProvider };
