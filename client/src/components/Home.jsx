import React from 'react';
//import Dex from './Dex.jsx';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import "../css/style.css";
const Home = () => {

    return(
        <div className = "bgoverlay">
            <div className = "boofy">
                <h1 className="flex text-center justify-content-center align-items-center">Welcome to Comidex</h1>
                <p className="flex text-center justify-content-center align-items-center">
                    Big time comic book fan? Click the button below to see stats and descriptions of over 700 
                    comic book characters. Including Marvel, DC, Anime, Star Wars, Harry Potter
                    etc. BaseStats of each character is the sum of all their abilities combined.
                    The format is inspired from the online <a href = "https://pokemondb.net/pokedex">
                    Pokemon Database </a> and just like a pokedex, this website serves as a 
                    comicdex. All data following character abilities and description are collected from <a href = "https://superheroapi.com/">Superhero API.</a> Keep on exploring!
                </p>
                    <Link to="/dexlist">
                        <button>Click to begin</button>
                    </Link>
            </div>
        </div>
    )
}

export default Home;