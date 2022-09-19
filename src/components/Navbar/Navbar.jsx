import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import './styles.css';
import { useState } from 'react';


const Navbar = () => {
    const [search, setSearch] =useState("");
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(search)

        if(!search) return 

        navigate(`/search?q=${search}`)
        setSearch("")
    }


    return (
        <nav id="navbar">
            <h2 className='logo'>
                <Link to="/"><BiCameraMovie id="icon-camera"/>TN Filmes</Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="search" placeholder="Busque um filme"
                 name="" id="isearch" value={search} onChange={(e)=>setSearch(e.target.value)} />
                <button type="submit"><BiSearchAlt2/></button>
            </form>
         
        </nav>
    );
};

export default Navbar;


