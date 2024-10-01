/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ItemCount.css";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { ToastContainer } from "react-toastify";

const ItemCount = ({ stock, initial, juego }) => {
  const [quantity, setQuantity] = useState(initial);

  const { addCart } = useContext(CartContext);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="flex-column">
      <div className="flex">
        <button className="" onClick={increment}>
          +
        </button>
        <h4 className="">{quantity}</h4>
        <button className="" onClick={decrement}>
          -
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => addCart(juego, quantity)}
          disabled={!stock}
          variant="contained"
          sx={{
            padding: "10px",
            display: "inline-block",
            marginTop: "15px",
            width: "100%",
            fontSize: "15px",
          }}
        >
          Agregar al carrito
        </Button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ItemCount;
