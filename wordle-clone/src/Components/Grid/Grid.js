import { useEffect, useState } from "react";

export const Grid = ({difficultyNum}) => {

    console.log(difficultyNum + "grid difficulty");
    const emptyBoard = [];
    for(let i = 0; i < difficultyNum; i++){ // difficultyNum will be used to change the amount of guesses
        emptyBoard.push(["", "", "", "", ""]);
    }

    console.log(emptyBoard);
    const[board, setBoard] = useState(emptyBoard);

    return(
        <div className="wordle-board"></div>
    );
}