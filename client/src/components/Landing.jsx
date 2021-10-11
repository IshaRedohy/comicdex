import React from 'react';
import Home from './Home';
import Dex from './Dex';
//import Individuals from './Individuals'
import Temp from './Temp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Individuals from './Individuals';

const Landing = () => {

    return(
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact><Home /></Route>
                    <Route path="/dexlist" exact><Dex /></Route>
                    <Route path="/dexlist/:index"><Individuals /></Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Landing;