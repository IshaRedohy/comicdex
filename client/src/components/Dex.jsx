import React, { useState,useEffect }  from 'react';
import axios from 'axios';
import Thumbnail from './Thumbnail';

const Dex = () => {
    const [displays, setDisplays] = useState([]);
    const [letter, setLetter] = useState("");

    const fetchCharacters = async () => {
        let response = await axios.get("/dexlist");
        let items = response.data;

        setDisplays(items);
    }

    useEffect(() => {
        fetchCharacters();
    }, []);

    return(
        <div>
        <div>
            <input type="text" className="fixed-top" placeholder="Search..."
                onChange={(e) => {
                    setLetter(e.target.value);
                }}
            />
        </div>
            <div className="row container-fluid">
            {
                displays.filter((val) => {
                    if (letter === "") { 
                        return val
                    } else if (val.name.toLowerCase().includes(letter.toLocaleLowerCase())) {
                        return val
                    }
                }).map((display) => {
                    return (
                        <Thumbnail 
                            key={display.index}
                            image={display.image} 
                            name={display.name} 
                            index={display.index}    
                         />
                    )
                })
            }
            </div>
        </div>
    )
}

export default Dex;