import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailcontainer.css";
import Spinner from "../Spinner/Spinner";
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";

const ItemDetailcontainer = () => {
  const [juego, setJuego] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let { id } = useParams();

  useEffect(() => {
    const getGame = async () => {
      const q = query(collection(db, "games"), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setJuego(docs);
    };
    getGame();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [id]);

  return (
    <div className="Spinner">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="ItemDetail">
          {juego.map((juego) => {
            return <ItemDetail juego={juego} key={juego.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ItemDetailcontainer;
