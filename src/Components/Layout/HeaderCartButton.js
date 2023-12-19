import classes from "./HeaderCartButtom.module.css";
import CartIcon from "../Cart/CartIcon";
import { useSelector } from "react-redux";

const HeaderCartButton = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems)
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItems.items.length}</span>
    </button>
  );
};

export default HeaderCartButton;
