import AvailableMeals from "./AvailableMeals.js";
import { Fragment } from "react";

const Meals = ({onAddToCart}) => {
  return (
    <Fragment>
      <AvailableMeals onAddToCart={ onAddToCart} />
    </Fragment>
  );
};

export default Meals;
