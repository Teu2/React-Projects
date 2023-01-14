import logo from './logo.svg';
import { ChangeColor } from './Components/ChangeColor';
import { useState } from 'react';
import './App.css';

function App() {

  const [textColor, setTextColor] = useState("red");

  const setNewTextColor = (color) => {
    setTextColor(color);
  }

  return (
    <div className="App">
      <div className='center'>
        <h1 style={{color: textColor}}>change color</h1>
        <ChangeColor setNewTextColor={setNewTextColor}/>
      </div>
    </div>
  );
}

export default App;
