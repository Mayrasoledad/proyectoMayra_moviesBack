//importo las dependencias
import express from "express";
import dotenv from "dotenv";
import logger from "morgan";


//importo la funcion connect
import {connect} from "./server/config/database.js";

// importo las rutas
import { router as moviesRoutes } from "./server/api/routes/movies.routes.js";

//configuro mi dotenv para acceder a las clavess de entorno
dotenv.config();

//creo mi servidor con express
const server = express();
//nos conectamos con mongo a traves de su funcion
connect();

const PORT = process.env.PORT;

//importante, sin estas 2 lineas express no entiende los json que les entran por peticiones http
server.use(express.json());
server.use(express.urlencoded({extended:true}))

// le pido a mi server que use logger (morgan) mientras este en desarrollo:
server.use(logger("dev"));

server.use("/movies" , moviesRoutes )

server.listen(PORT, () => {
   console.log(`Node server listening on port http://localhost:${PORT}`) 
})