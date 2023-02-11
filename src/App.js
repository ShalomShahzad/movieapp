import React, { useState } from "react";
import { useEffect } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

//7cf2e4f0

const API_URL = "http://www.omdbapi.com?apikey=7cf2e4f0"
const movie1 = {
    "Title": "Spider-Man: Far from Home",
    "Year": "2019",
    "imdbID": "tt6320628",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
}

const App = () =>{
    const [movies, setMovies] = useState([]);


    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies("Spider-Man")
    }, [])

    return(
        <div className="app">
            <h1>SearchMoviesAndShows</h1>

            <div className="search">
                <input placeholder="Search for movies" value="Spider-Man" onChange={() => {}}
                />
                <img
                    src={SearchIcon}
                    alt="Search"
                    onClick={() => {}}
                />
            </div>

            {
                movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie}/>
                    ))}
                </div>
                ) :
                (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )
            }
         </div>
    );      
}

export default App