import { useState } from "react";
import "./Checkout.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import TextField from "@mui/material/TextField";
import MessageSuccess from "../MessageSucces/MessageSucces";

const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: 20,
  },
};

const initialState = {
  name: "",
  lastName: "",
  email: "",
  city: "",
};

const Checkout = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseId] = useState(null);
  const [formDisabled, setFormDisabled] = useState(false);

  const { cart, setCart } = useContext(CartContext)
  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "purchasesCollection"), {
      values, cart
    });
    setPurchaseId(docRef.id);
    setValues(initialState);
    setFormDisabled(true);
    setCart([])
  };

  return (
    <div style={styles.containerShop}>
      <h1 style={{ color: "white" }}>Shop</h1>
      <form className="FormContainer" onSubmit={onSubmit}>
        <TextField
          placeholder="Name"
          style={{ margin: 10,width: 400, background: "white" }}
          name="name"
          value={values.name}
          onChange={onChange}
          required
          className="TextField"
          disabled={formDisabled}
        />
        <TextField
          placeholder="Last Name"
          style={{ margin: 10, width: 400, background: "white" }}
          name="lastName"
          value={values.lastName}
          onChange={onChange}
          required
          className="TextField"
          disabled={formDisabled}

        />
        <TextField
          placeholder="Email"
          style={{ margin: 10, width: 400, background: "white" }}
          name="email"
          value={values.email}
          onChange={onChange}
          required
          className="TextField"
          type="email"
          id="email1"
          disabled={formDisabled}

        />
        <TextField
          placeholder="City"
          style={{ margin: 10, width: 400, background: "white" }}
          name="city"
          value={values.city}
          onChange={onChange}
          required
          className="TextField"
          disabled={formDisabled}

        />
        <button className="btnASendAction TextField" disabled={formDisabled}>Send</button>
      </form>

      {purchaseID ? <MessageSuccess purchaseID={purchaseID} /> : null}
    </div>
  );
};

export default Checkout;
