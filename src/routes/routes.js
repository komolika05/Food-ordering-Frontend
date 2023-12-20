import Meals from "../Components/Items/Meals";
import CartCheckout from "../Components/Cart/CartCheckout";

const routes = [
  {
    path: "/",
    element: <Meals />,
  },
  {
    path: "/cart-check-out",
    element: <CartCheckout />,
  },
];

export default routes;
