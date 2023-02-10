import React from 'react'
import { Key } from './Keys'
import './Keyboard.css'
import { IoBackspaceOutline } from "react-icons/io5";

export const Keyboard = () => {

  const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className='keyboard'>
      <div className='key-row'>
        {row1.map((keyValue) => { return <Key keyVal={keyValue}/> })}
      </div>
      <div className='key-row'>
        {row2.map((keyValue) => { return <Key keyVal={keyValue}/> })}
      </div>
      <div className='key-row'>
        <Key keyVal={"ENTER"} command={true}/>
        {row3.map((keyValue) => { return <Key keyVal={keyValue}/> })}
        <Key keyVal={<IoBackspaceOutline className='react-icon'/>} command={true}/>
      </div>
    </div>
  );
}