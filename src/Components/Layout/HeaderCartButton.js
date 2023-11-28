import classes from "./HeaderCartButtom.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = ({cartItems}) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItems.length}</span>
    </button>
  );
};

export default HeaderCartButton;
