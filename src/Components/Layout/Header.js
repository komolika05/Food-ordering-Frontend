import { Fragment } from "react";
import classes from "./Header.module.css";
import mainHeaderImage from "../../images/headerBanner.jpg";
import { hover } from "@testing-library/user-event/dist/hover";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.Header}>
        <h1>Dilfoods</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-img"]}>
        <img src={mainHeaderImage} alt="Order Delicious Food" />
      </div>
    </Fragment>
  );
};

export default Header;
