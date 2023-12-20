import { Fragment } from "react";
import classes from "./Header.module.css";
import mainHeaderImage from "../../images/headerBanner.jpg";
import { hover } from "@testing-library/user-event/dist/hover";
import HeaderCartButton from "./HeaderCartButton";
import MealsDescription from "../Items/MealsDescription";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.Header}>
        <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
          <h1>BiteBuddy</h1>
        </Link>
        <HeaderCartButton />
      </header>
      <div className={classes["main-img"]}>
        <img src={mainHeaderImage} alt="Order Delicious Food" />
      </div>
      <MealsDescription />
    </Fragment>
  );
};

export default Header;
