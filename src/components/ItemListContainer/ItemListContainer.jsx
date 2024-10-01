/* eslint-disable react/prop-types */
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
import Spinner from "../Spinner/Spinner";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ children }) => {
  const [juegos, setJuegos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let { categoryId } = useParams();

  useEffect(() => {
    const getGames = async () => {
      let q;
      categoryId
        ? (q = query(
            collection(db, "games"),
            where("genero", "==", categoryId)
          ))
        : (q = query(collection(db, "games")));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setJuegos(docs);
    };
    getGames();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [categoryId]);

  return (
    <div>
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="ItemListContainer">{children}</div>
          <h2>{categoryId}</h2>
          <ItemList className="Contenedor-Juegos" juegos={juegos} />
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
