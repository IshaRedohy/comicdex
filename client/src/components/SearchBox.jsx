import React, { useState,useEffect }  from 'react';

const SearchBox = () => {
    const [letter, setLetter] = useState("");
    return(
        <input type="text" placeholder="Search..."/>
    )
}

export default SearchBox;