import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './styles.css'

const imageURL = import.meta.env.VITE_IMG;

//`/movie/${movie.id}
const MovieCard = ({movie, showLink = true}) =>{

    const navigate = useNavigate();
    return(
        <div className="movie-card" onClick={()=>navigate(`/movie/${movie.id}`)}>
            <img src={imageURL + movie.poster_path} alt={movie.title}/>
            <h2>{movie.title}</h2>
            <p>
                <FaStar/> {movie.vote_average}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    )
}

export default MovieCard;