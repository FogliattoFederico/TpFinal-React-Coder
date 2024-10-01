/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const message = () => {
    toast.success("Agregado exitosamente", {
      position: "top-right",
      autoClose: 500,
      transition: Bounce,
      theme: "dark",
    });
  };
  const message2 = () => {
    toast.success("Quitado exitosamente", {
      position: "top-right",
      autoClose: 500,
      transition: Bounce,
      theme: "dark",
    });
  };
  const addCart = (ProductoNuevo, cantidad) => {
    if (IsInCart(ProductoNuevo.id)) {
      setCart(
        cart.map((item) =>
          item.id === ProductoNuevo.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        )
      );
    } else {
      setCart([...cart, { ...ProductoNuevo, cantidad }]);
    }
    cantidad > 0 ? message() : message2();
  };
  const IsInCart = (Itemid) => {
    return cart.some((item) => item.id === Itemid);
  };
  const getQuantity = () => {
    let cant = 0;

    cart.forEach((e) => (cant += e.cantidad));

    return cant;
  };
  const clear = () => {
    setCart([]);
  };
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addCart,
        getQuantity,
        clear,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
