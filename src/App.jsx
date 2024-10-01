import "./App.css";
import { CartProvider } from "./Context/CartContext";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailcontainer from "./components/ItemDetailContainer/ItemDetailcontainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div>
          <nav>
            <NavBar />
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer>
                  <h1 style={{ marginBottom: "40px" }}>
                    Bienvenido a POWER GAMES
                  </h1>
                  <h2 style={{ fontSize: "3rem" }}>
                    Aqui encontraras los ultimos lanzamientos para todas las
                    plataformas
                  </h2>
                </ItemListContainer>
              }
            />
            <Route path="/Detail/:id" element={<ItemDetailcontainer />} />
            <Route
              path="/Category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/Pago" element={<Checkout />}></Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
