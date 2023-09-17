import React from 'react'
import { Link } from 'react-router-dom';
import MainMenuStyle from './MainMenu.module.css';

const MainMenu = () => {
  return (
    <header className={MainMenuStyle.header}>
        <nav>
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/about">About</Link></li>
                <li> <Link to="/contact">Contact</Link></li>
                
            </ul>
        </nav>
   
   

    </header>
  )
}

export default MainMenu;
