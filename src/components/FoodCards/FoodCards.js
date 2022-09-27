import React from "react";
import FoodCard from "../FoodCard/FoodCard";

const FoodCards = ({ foods }) => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {foods.map((food) => (
          <FoodCard key={food.idMeal} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodCards;
