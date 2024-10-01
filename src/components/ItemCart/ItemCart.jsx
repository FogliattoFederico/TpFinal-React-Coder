/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import ItemCountCart from "../ItemCountCart/ItemCountCart";

const ItemCart = ({ juego }) => {
  let { id, nombre, precio, imagen, cantidad, stock } = juego;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400rem"
          image={imagen}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {nombre}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Cantidad: {cantidad}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Precio: ${precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <ItemCountCart juego={juego} initial={cantidad} stock={stock} id={id} />
    </Card>
  );
};
export default ItemCart;
