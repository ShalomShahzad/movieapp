import React from "react";
import { useEffect } from "react";
import './App.css'
import SearchIcon from './search.svg'

//7cf2e4f0

const API_URL = "http://www.omdbapi.com?apikey=7cf2e4f0"

const App = () =>{


    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies("Spider-Man")
    }, [])

    return(
        <div className="app">
            <h1>SearchMovies</h1>
        </div>
    );
}

export default App