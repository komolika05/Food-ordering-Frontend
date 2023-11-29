import AvailableMeals from "./AvailableMeals.js";
import { Fragment } from "react";

const Meals = ({onAddToCart , onRemoveFromCart}) => {
  return (
    <Fragment>
      <AvailableMeals onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} />
    </Fragment>
  );
};

export default Meals;
