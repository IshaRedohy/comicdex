import React from 'react';
//import Dex from './Dex.jsx';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import "../css/style.css";
const Home = () => {

    return(
        <div className = "bgoverlay">
            <div className = "boofy">
                <h1 className="flex text-center justify-content-center align-items-center">Welcome to Comidex</h1>
                    <Link to="/dexlist">
                        <button>Click to begin</button>
                    </Link>
            </div>
        </div>
    )
}

export default Home;