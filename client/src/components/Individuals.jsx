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
    }

    useEffect(() => {
        handleDynamic();
    }, []);

    return(
        <div className = "bgoverlay">
            <div className="row container-fluid pt-2 pb-5">
                <div className="col-6">
                    <div className="row">
                        <div className="col-6">
                            <h1>{character.name}</h1>
                            <p>Real-name: {character.realname}</p> 
                            <p>Sex: {character.sex}</p> 
                        </div>
                        <div className="col-6 side">
                            <h4>Side: {character.side}</h4>
                            <p>Groups joined: {character.groups}</p>
                        </div>
                    </div>
                    <img src={character.image} alt="" className="pt-3 hero"></img>
                    <h5 className="mt-4">First appearance: {character.first_appearance}</h5>
                    <h5>publisher: {character.publisher}</h5>
                    {/* Sex:{character.sex} */}
                </div>
                <div className="col-6 mt-5 svglines">
                    <p className="line" style={{width: `${character.combat}%`}}><b>Combat: {character.combat}</b></p>
                    <p className="line" style={{width: `${character.durability}%`}}><b>Durability: {character.durability}</b></p>
                    <p className="line" style={{width: `${character.speed}%`}}><b>Speed: {character.speed}</b></p>
                    <p className="line" style={{width: `${character.strength}%`}}><b>Strength: {character.strength}</b></p>
                    <p className="line" style={{width: `${character.intelligence}%`}}><b>Intelligence: {character.intelligence}</b></p>
                    <p className="line" style={{width: `${character.power}%`}}><b>Power: {character.power}</b></p>
                    <h2 className="basestats">Basestats: {character.basestats}</h2>
                    <p className="struct">Height: {character.height}   Weight:{character.weight}</p>
                </div>
            </div>
        </div>
    )
}

export default Individuals;


//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