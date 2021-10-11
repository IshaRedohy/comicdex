import React from 'react';
//import Dex from './Dex.jsx';
import {BrowserRouter as Router, Link} from 'react-router-dom';
const Home = () => {

    return(
        <div>
            <h1 className="flex text-center justify-content-center align-items-center">Welcome to Comidex</h1>
                <Link to="/dexlist">
                    <button>Click to begin</button>
                </Link>
        </div>
    )
}

export default Home;