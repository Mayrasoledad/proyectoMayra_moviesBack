//conexion con mi base de datos
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB = process.env.MONGODB;

//funcion que conecta server con mongo:
const connect = async () => {
    try {
        const DB = await mongoose.connect(MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        //con destructuring le sacamos el name y el host para poder verlo en el .log:
     const {name, host} = DB.connection;
     console.log(`connected to database ${name} in host: ${host}`)
    } catch (error) {
    console.log("error connecting to database", error)
    }
};

//exportamos la funcion para poder usarla en el index.js
export {connect}
