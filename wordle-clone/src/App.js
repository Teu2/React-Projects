import { useEffect, useState } from 'react';
import './App.css';
import { Grid } from './Components/Grid/Grid';
import { Keyboard }  from './Components/Keys/Keyboard';
import { Navbar } from './Components/Navbar/Navbar';
import { createContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export const AppContext = createContext();

function App() {

  const notify1 = () => toast('Not enough letters', {
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const notify2 = () => toast('Nothing more to delete', {
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const [difficulty, setDifficulty] = useState(6);
  const [currentAttempt, setCurrentAttempt] = useState({row: 0, col: 0});

  const setNewDifficulty = (value) => {
    setDifficulty(value);
  }

  const[board, setBoard] = useState([]);
  const[boardCount, setBoardCount] = useState();

  useEffect(() => { // useEffect will be called whenever changes to the 'difficulty' value occurs
    const emptyBoard = [];
    for(let i = 0; i < difficulty; i++){
      emptyBoard.push(["", "", "", "", ""]);
    }
    setBoard(emptyBoard);
    setBoardCount(emptyBoard.length);
  }, [difficulty]);

  const selectLetter = (keyVal) => {
    if(currentAttempt.col > 4){
      return;
    }

    // get current instance of the board (state)
    const newBoard = [...board];
    newBoard[currentAttempt.row][currentAttempt.col] = keyVal;

    setBoard(newBoard);
    setCurrentAttempt({ ...currentAttempt, col: currentAttempt.col + 1 });
  }

  const deleteLetter = () => {
    console.log("you delete");  
    if (currentAttempt.col === 0){ // no letter can't be deleted
        notify2();
        return;
    }

    const newBoard = [...board];
    newBoard[currentAttempt.row][currentAttempt.col - 1] = ""; // delete and set the value to an empty string again
    
    setBoard(newBoard);
    setCurrentAttempt({ ...currentAttempt, col: currentAttempt.col -1 });
  }

  const enterWord = () => {
    if(currentAttempt.col !== 5){
      notify1();
      return;
    }
    setCurrentAttempt({ row: currentAttempt.row + 1, col: 0 })
  }

  return (
    <div className="App">
      <ToastContainer position="botttom-center" limit={1} theme="dark"/>
      <Navbar />
      <input id="difficulty-setting" type="range" min="1" max="6" value={difficulty} onChange={(e) => setNewDifficulty(+e.target.value)}/>
      <AppContext.Provider value={{ board, setBoard, boardCount, currentAttempt, setCurrentAttempt, selectLetter, deleteLetter, enterWord }}>
        <div className="center">
          <Grid/>
        </div>
        <div className="center">
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;


