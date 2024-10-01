/* eslint-disable react/prop-types */

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const Item = ({ juego }) => {
  const { nombre, precio, descripcion, imagen } = juego;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image={imagen}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {nombre}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {descripcion}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            ${precio}
          </Typography>
        </CardContent>
      </CardActionArea>

      <Link
        to={`/detail/${juego.id}`}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Button
          variant="contained"
          sx={{
            padding: "10px",
            display: "inline-block",
            marginBottom: "20px",
            width: "80%",
            fontSize: "15px",
          }}
        >
          Ver Mas
        </Button>
      </Link>
    </Card>
  );
};
export default Item;
