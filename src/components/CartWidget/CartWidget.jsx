import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);

  return (
    <div className="Carrito">
      <Link to="/Cart">
        <FaShoppingCart size={35} />
      </Link>
      <span>{getQuantity()}</span>
    </div>
  );
};

export default CartWidget;
