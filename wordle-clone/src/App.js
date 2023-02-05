import { useEffect, useState } from 'react';
import './App.css';
import {Grid} from './Components/Grid/Grid';
import {Keys}  from './Components/Keys/Keys';
import { Navbar } from './Components/Navbar/Navbar';
import { createContext } from 'react';

export const AppContext = createContext();

function App() {

  const [difficulty, setDifficulty] = useState(6);

  const setNewDifficulty = (value) => {
    setDifficulty(value);
  }

  const[board, setBoard] = useState([]);
  const[boardCount, setBoardCount] = useState();

  useEffect(() => { // useEffect will be called whenever changes values occurs
    const emptyBoard = [];
    for(let i = 0; i < difficulty; i++){
      emptyBoard.push(["", "", "", "", ""]);
    }
    setBoard(emptyBoard);
    setBoardCount(emptyBoard.length);
  }, [difficulty]);

  return (
    <div className="App">
      <Navbar />
      <input id="difficulty-setting" type="range" min="1" max="6" value={difficulty} onChange={(e) => setNewDifficulty(+e.target.value)}/>
      <AppContext.Provider value={{ board, setBoard, boardCount }}>
        <div className="center">
          <Grid/>
        </div>
        <div className="center">
          <Keys />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;


