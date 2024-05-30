import React from "react";

const BurgerBuilder = ({ add }) => {
  return (
    <div className="button-container">
      <div className="button-row">
        <button onClick={() => add("Burger-Top")}>Burger-Top</button>
        <button onClick={() => add("Burger-Bottom")}>Burger-Bottom</button>
      </div>
      <div className="button-row">
        <button onClick={() => add("Ketchup")}>Ketchup</button>
        <button onClick={() => add("Senf")}>Senf</button>
      </div>
      <div className="button-row">
        <button onClick={() => add("Gurken")}>Gurken</button>
        <button onClick={() => add("Hamburger-Patty")}>Hamburger-Patty</button>
      </div>
      <div className="button-row">
        <button onClick={() => add("Kaese")}>Kaese</button>
      </div>
    </div>
  );
};

export default BurgerBuilder;
