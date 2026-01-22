import { useState } from 'react'
import './Navbar.css'
import DarkMode from '../DarkMode/DarkMode';



const Navbar = () => {  
    return (
    <nav className="navbar">
        <h1>Movieshow</h1>

        <div className="navbar-links">
            <DarkMode />
            <a href="#popular">Popular🔥</a>
            <a href="#top_rated">Top Rated⭐</a>
            <a href="#upcoming">Upcoming😛</a>
        </div>
    </nav>
  );
} ;  



export default Navbar;