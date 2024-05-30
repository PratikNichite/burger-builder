import React from "react";

const BurgerBuilder = ({ add, basicIngredients }) => {
  return (
    <div className="button-container">
      {basicIngredients.map((ingredient) => (
        <button
          className="button"
          key={ingredient}
          onClick={() => add(ingredient)}
        >
          {ingredient}
        </button>
      ))}
    </div>
  );
};

export default BurgerBuilder;
