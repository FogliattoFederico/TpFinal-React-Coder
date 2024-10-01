/* eslint-disable react/prop-types */
import Item from "../Item/Item";

const ItemList = ({ juegos }) => {
  return (
    <div className="Contenedor-Juegos">
      {juegos.map((juego) => {
        return (
          <div key={juego.id}>
            <Item juego={juego} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
