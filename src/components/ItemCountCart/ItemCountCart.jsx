/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ItemCountCart.css";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { ToastContainer } from "react-toastify";

const ItemCountCart = ({ stock, initial, juego, id }) => {
  const [quantity, setQuantity] = useState(initial);

  const { addCart, removeItem } = useContext(CartContext);

  const increment = () => {
    if (quantity < stock) {
      setQuantity((prevQuantity) => prevQuantity + 1);
      addCart(juego, +1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      addCart(juego, -1);
    }
  };
  return (
    <div className="flex-column">
      <div className="flex">
        <button className="" onClick={increment} disabled={quantity >= stock}>
          +
        </button>
        <h4 className="">{quantity}</h4>
        <button className="" onClick={decrement} disabled={quantity == 1}>
          -
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => removeItem(id)}
          disabled={!stock}
          variant="text"
          sx={{
            padding: "10px",
            display: "inline-block",
            marginTop: "15px",
            width: "100%",
            fontSize: "15px",
          }}
        >
          X
        </Button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ItemCountCart;
