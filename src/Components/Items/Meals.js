import AvailableMeals from "./AvailableMeals.js";
import { Fragment } from "react";
import Header from "../Layout/Header.js";

const Meals = ({ onAddToCart, onRemoveFromCart }) => {
  return (
    <Fragment>
      <Header />
      <AvailableMeals
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
      />
    </Fragment>
  );
};

export default Meals;
