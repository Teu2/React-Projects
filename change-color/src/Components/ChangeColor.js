import React from 'react';
import { useState, useEffect } from 'react';

export const ChangeColor = ({setNewTextColor}) => {

    const [newColor, setNewColor] = useState();
    
    const setNewColorWithoutTyping = (color) => {
        setNewTextColor(color)
    }

    return(
        <div>
            <input type="text" placeholder='Enter Color' onChange={(event) => setNewColorWithoutTyping(event.target.value)}/>
            {/* <input type="text" placeholder='Enter Color' onChange={(event) => setNewColor(event.target.value)}/> */}
            <button onClick={() => setNewTextColor(newColor)}>CHANGE</button>
        </div>
    );
}