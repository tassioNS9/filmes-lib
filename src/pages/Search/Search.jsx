import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; // permite pegar a querystring da url
import MovieCard from "../../components/MovieCard/MovieCard";
import Navbar from "../../components/Navbar/Navbar";
import "./styles.css";

const apiKey = import.meta.env.VITE_API_KEY
const searchURL = import.meta.env.VITE_SEARCH

import '../../components/MovieCard/styles.css'



const Search = () => {
    const [searchParams] = useSearchParams()

    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")

    const getSearchedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
        console.log(data)
    }


    useEffect(() => {
        const searchWithQueyURL = `${searchURL}?${apiKey}&query=${query}`;

        getSearchedMovies(searchWithQueyURL);

    }, [query])


    return (
        <>
            <Navbar />
            <div className='container'>
                <h1 className='title'>Resultados para : <span className="query-text">{query}</span></h1>
                <div className='movies-container'>
                    {movies.length === 0 && <p>Carregando Filmes...</p>}
                    {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
                </div>
            </div>
        </>
    )
}

export default Search;