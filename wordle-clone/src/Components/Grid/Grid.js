import { Letter } from "../Letter";
import { useContext } from "react";
import { AppContext } from "../../App";

export const Grid = () => {

    const {board, boardCount} = useContext(AppContext);
    console.log(`board count == ${boardCount}`);

    return(
        <div className="wordle-board">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((val, colIndex) => (
                        <div key={colIndex}><Letter value={val} letterRow={rowIndex} letterCol={colIndex} className="letter"/></div>
                    ))}
                </div>
            ))}
        </div>
    );
}