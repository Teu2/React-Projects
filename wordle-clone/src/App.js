import { useState } from 'react';
import './App.css';
import {Grid} from './Components/Grid/Grid';
import {Keys}  from './Components/Keys/Keys';

function App() {

  const [difficulty, setDifficulty] = useState(6);
  console.log(difficulty + "difficulty")

  const setNewDifficulty = (value) => {
    setDifficulty(value);
  }

  return (
    <div className="App">
      <nav><h1>WORDLE CLONE</h1></nav>
      <input id="difficulty-setting" type="range" min="0" max="6" value={difficulty} onChange={(e) => setNewDifficulty(+e.target.value)}/>
      <Grid difficultyNum={difficulty}/>
    </div>
  );
}

export default App;
