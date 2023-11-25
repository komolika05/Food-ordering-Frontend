import AvailableMeals from "./AvailableMeals.js";
import MealsDescription from "./MealsDescription.js";
import { Fragment } from "react";

const Meals = () => {
  return (
    <Fragment>
      <MealsDescription />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
