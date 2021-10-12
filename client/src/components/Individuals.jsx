import React, { useState,useEffect,} from "react"; 
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../css/style.css";

const Individuals = () => {
    const { index } = useParams();
    // console.log(match);
    const [character, setCharacter] = useState([]);

    const handleDynamic = async () => {
        let response = await axios.get(`/dexlist/${index}`);
        let item = response.data[0];

        setCharacter(item);
        console.log(item);
    }

    useEffect(() => {
        handleDynamic();
    }, []);

    return(
        <div className = "bgoverlay">
            <div className="row container-fluid">
                <div className="col-6">
                    <h3>Groups joined: {character.groups}</h3>
                    <h4>First appearance: {character.first_appearance},publisher: {character.publisher}</h4>
                    <h4>Side: {character.side}</h4>
                    <img src={character.image} alt=""></img>
                    <h1>{character.name}</h1>
                    <p>Real-name: {character.realname}          Sex:{character.sex}</p>
                </div>
                <div className="col-6 mt-5 svglines">
                    <p className="combat line"><b>Combat: {character.combat}</b></p>
                    <p className="durability line"><b>Durability: {character.durability}</b></p>
                    <p className="speed line"><b>Speed: {character.speed}</b></p>
                    <p className="strength line"><b>Strength: {character.strength}</b></p>
                    <p className="intelligence line"><b>Intelligence: {character.intelligence}</b></p>
                    <p className="power line"><b>Power: {character.power}</b></p>
                    <h2 className="basestats">Basestats: {character.basestats}</h2>
                    <p>Height: {character.height}   Weight:{character.weight}</p>
                </div>
            </div>
        </div>
    )
}

export default Individuals;


//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