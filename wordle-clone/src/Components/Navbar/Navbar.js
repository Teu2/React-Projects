import React from 'react';
import { BiCog } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoStatsChartSharp } from "react-icons/io5";
import { GrCircleQuestion } from "react-icons/gr";
import './Navbar.css';

export const Navbar = () => {
    return(
        <nav className='navbar'>
            <button><GiHamburgerMenu className='app-logo'/></button>
 
            <h1>WORDLE CLONE</h1>

            <div className='navbar-options'>
                <button><GrCircleQuestion className='app-logo'/></button>
                <button><IoStatsChartSharp className='app-logo'/></button>
                <button><BiCog className="app-logo"/></button>
            </div>
        </nav>
    );
}