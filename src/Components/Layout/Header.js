import { Fragment } from "react";
import classes from "./Header.module.css";
import mainHeaderImage from "../../images/headerBanner.jpg";
import { hover } from "@testing-library/user-event/dist/hover";
import HeaderCartButton from "./HeaderCartButton";
import MealsDescription from "../Items/MealsDescription";

const Header = ({ cartItems }) => {
  return (
    <Fragment>
      <header className={classes.Header}>
        <h1>BiteBuddy</h1>
        <HeaderCartButton cartItems={cartItems} />
      </header>
      <div className={classes["main-img"]}>
        <img src={mainHeaderImage} alt="Order Delicious Food" />
      </div>
      <MealsDescription />
    </Fragment>
  );
};

export default Header;
