import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const Letter = ({value, letterRow, letterCol}) => {
    const { board, setBoard } = useContext(AppContext);

    const handleChange = () => {
        const newBoard = [...board];
        newBoard[letterRow][letterCol] = value;
        setBoard(newBoard);
    };

    return(        
        <div className="letter" onClick={handleChange}>{board[letterRow][letterCol]}</div>
    );
}