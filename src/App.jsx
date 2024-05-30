import { useState } from "react";
import BurgerBuilder from "./components/BurgerBuilder";
import "./App.css";
import data from "./recipe.js";

const randomBurgerIndex = Math.floor(Math.random() * data.length);
const burger = data[randomBurgerIndex];

function App() {
  const [burgerIngredients, setBurgerIngredients] = useState([]);

  const addIngredient = (ingredient) => {
    const ingId = Date.now();
    setBurgerIngredients((oldIngredients) => [
      ...oldIngredients,
      { id: ingId, name: ingredient },
    ]);
  };

  const removeIngredient = (id) => {
    setBurgerIngredients((oldIngredients) =>
      oldIngredients.filter((ingredient) => ingredient.id != id)
    );
  };

  const checkCombination = () => {
    const ingredientNames = burgerIngredients
      .map((ingredient) => ingredient.name)
      .sort();
    const sortedDesired = [...burger.ingredients].sort();
    if (JSON.stringify(ingredientNames) === JSON.stringify(sortedDesired)) {
      alert("Correct combination!");
    } else {
      alert("Incorrect combination!");
    }
  };

  return (
    // <>
    //   <h2>Make {burger.burgerName}</h2>
    //   <div>
    //     {burgerIngreditents.map((burger) => (
    //       <div key={burger.id} onClick={() => removeIngredient(burger.id)}>
    //         {burger.name}
    //       </div>
    //     ))}
    //   </div>

    //   <BurgerBuilder add={addIngredient} />
    //   <button onClick={checkCombination}>Submit</button>
    // </>
    <div className="app">
      <div>
        <h2 className="title">Make {burger.burgerName}</h2>

        <div className="ingredients">
          {burgerIngredients.map((burger) => (
            <div
              key={burger.id}
              className="ingredient"
              onClick={() => removeIngredient(burger.id)}
            >
              {burger.name}
            </div>
          ))}
        </div>
      </div>

      <div>
        <BurgerBuilder add={addIngredient} />
        <button className="submit-button" onClick={checkCombination}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
