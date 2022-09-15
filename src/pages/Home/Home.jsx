
import './styles.css'
import { useState, useEffect } from "react";
import Navbar from '../../components/Navbar/Navbar';
import MovieCard from '../../components/MovieCard/MovieCard';

function Home() {

    const moviesURL = import.meta.env.VITE_API;
    const apiKey = import.meta.env.VITE_API_KEY;


    console.log(moviesURL, apiKey);
    const [topMovies, setTopMovies] = useState([]);



    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setTopMovies(data.results);
        console.log(data.results)
    }


    useEffect(() => {
        const topRateUrl = `${moviesURL}top_rated?${apiKey}`;

        getTopRatedMovies(topRateUrl);

    }, [])


    return (
        <>
            <div className='container'>
                <h1 className='content-title'> Melhores Filmes</h1>
                <div className='movies-container'>
                    {topMovies.length === 0 && <p>Carregando Filmes...</p>}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
                </div>
            </div>
         
        </>
    )

}

export default Home;
