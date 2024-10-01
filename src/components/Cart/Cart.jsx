import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import "./Cart.css";

const Cart = () => {
  let { cart, getQuantity, clear } = useContext(CartContext);

  const totalImporte = cart.reduce(
    (acumulador, producto) => acumulador + producto.precio * producto.cantidad,
    0
  );

  return (
    <div className="Cart">
      <div className="Contenedor-Juegos-Cart">
        {cart.map((juego) => {
          return <div key={juego.id}>{<ItemCart juego={juego} />}</div>;
        })}
      </div>
      <div className="Cart-container">
        <div>
          {getQuantity() ? (
            <h2 className="Titulo">Tu Carrito</h2>
          ) : (
            <h2 className="Titulo">Tu carrito esta vacio</h2>
          )}
          <h3>Cantidad de productos : {getQuantity()}</h3>
          <h3>Total: $ {totalImporte}</h3>
        </div>
        <div className="Botones">
          <Link to="/Pago">
            {getQuantity() ? (
              <Button sx={{ fontSize: "1.5rem" }} variant="contained">
                Checkout
              </Button>
            ) : null}
          </Link>
          <Button
            sx={{ fontSize: "1.5rem" }}
            variant="contained"
            color="error"
            onClick={clear}
          >
            Vaciar Carrito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
