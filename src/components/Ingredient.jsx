// src/Ingredient.js
import React from "react";

const Ingredient = ({ ingredient, onClick }) => (
  <div
    onClick={() => onClick(ingredient)}
    style={{ cursor: "pointer", margin: "5px" }}
  >
    <img
      src={ingredient.image}
      alt={ingredient.name}
      style={{ width: "50px" }}
    />
    <p>{ingredient.name}</p>
  </div>
);

export default Ingredient;
