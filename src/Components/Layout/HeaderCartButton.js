import classes from "./HeaderCartButtom.module.css";
import CartIcon from "../Cart/CartIcon";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const HeaderCartButton = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <Link
      to="/cart-check-out"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <button className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        {cartItems.items.length > 0 && (
          <span className={classes.badge}>{cartItems.items.length}</span>
        )}
      </button>
    </Link>
  );
};

export default HeaderCartButton;
