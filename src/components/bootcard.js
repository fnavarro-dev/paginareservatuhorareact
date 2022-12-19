import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import basket from "../assets/img/basket.jpg";
import "./styles1212.css";

export default function BootCard() {
  return (
    <div class="container my-4">
      <div class="row">
        <div class="mx-auto col-12 h-50 min-vh-50 pruebaAlto">
          
          <h1 class="clubgorila">Club de Basketball "Gorilla"</h1>
          <button class="raquiImagen w-100" href="#">
            <h1 class="raquiTextoImagen">Club de Basketball "Gorilla</h1>
          </button>
          <button class="raquiBoton w-100" href="#">
            <h1 class="raqui">Reserva aquí</h1>
          </button>
        </div>

        <div class="mx-auto col-12 h-50 min-vh-50 pruebaAlto">
          
          <h1 class="clubgorila">Club de Basketball "Gorilla"</h1>
          <button class="raquiImagen w-100" href="#">
            <h1 class="raquiTextoImagen">Club de Basketball "Gorilla</h1>
          </button>
          <button class="raquiBoton w-100" href="#">
            <h1 class="raqui">Reserva aquí</h1>
          </button>


          

        </div>

      </div>
    </div>
  );
}
