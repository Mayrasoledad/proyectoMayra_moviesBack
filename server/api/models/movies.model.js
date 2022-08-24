import mongoose from "mongoose";

//recupero schema de mongoose
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: {type: String, required: true},
    director: {type: String},
    year: {type: Number, required: true},
    genre: {type: String, required: true},
    image:{type: String, required: false},
    description:{type: String, required: false},
});

const Movie = mongoose.model("movie", MovieSchema);

export {Movie};