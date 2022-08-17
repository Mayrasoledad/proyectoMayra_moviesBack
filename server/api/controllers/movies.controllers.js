import { Movie } from "../models/movies.model.js";

//funcion para hacer el get de todas las movies
const getAllMovies = async(req, res, next) => {
    try {
        const movies = await Movie.find();
        return res.json({
            status:200,
            data: {movies: movies}   //los datos que quiero que me devuelva
        })

    } catch (error) {
        return next(error);
    }
};

const createMovie = async(req, res, next) => {
    try{
        const newMovie = new Movie();
        newMovie.title = req.body.title;
        newMovie.director = req.body.director;
        newMovie.year = req.body.year;
        newMovie.genre = req.body.genre;
        newMovie.image = req.body.image;

        // almaceno el guardado en una variable para que se me refleje en consola dentro de data exactamente que estoy
        //guardando en la base de datos
        const newMovieDB = await newMovie.save();
        return res.json({
            status: 201,
            data: { movie: newMovieDB }
        })
    } catch (error) {
        return next(error);
    }
};

//funcion para recuperar una movie por id de mongo
const getMovieByID = async (req,res,next) => {
    try {
        const {movieID} = req.params;
        const movieByID = await Movie.findById(movieID);

        return res.json({
            status:200,
            data: {movie: movieByID},
        });
    } catch (error) {
        return next(error)
    }
};

//funcion para editar una movie por id de mongo
const editMovie = async (req,res,next) => {
    try {
        const {movieID} = req.params;
        const movieModify = new Movie (req.body);
        //para evitar que se modifique el id de mongo
        movieModify._id = movieID;
        const movieUpdated = await Movie.findByIdAndUpdate(movieID, movieModify)

        return res.json({
            status:200,
            data: {movie: movieUpdated},
        });
    } catch (error) {
        return next(error)
    }
};

//funcion para eliminar una movie 
const deleteMovie = async (req,res,next) => {
    try {
        const {movieID} = req.params;
        await Movie.findByIdAndDelete(movieID);

        return res.json({
            status:200,
            data: `película eliminada ${movieID}`,
        });
    } catch (error) {
        return next(error)
    }
};

//funcion para buscar una movie por nombre
const findMovieByName = async (req,res,next) => {
    const {name} = req.params;
    try {
        const movieByName = await Movie.find({name: name});
        return res.json({
            status:200,
            data: {movie: movieByName}
        });
    } catch (error) {
        return next(error)
    }
};

export { getAllMovies, createMovie, getMovieByID, editMovie, deleteMovie, findMovieByName };