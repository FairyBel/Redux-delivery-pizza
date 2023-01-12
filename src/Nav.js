import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "./App.css"; 
import App from "./App";


function Nav(){
    return(
        <Router>
            <nav>
                <Link className="nav" to = '/home'>Главная</Link>
                <Link className="nav" to = '/asia'>Азиатская кухня</Link>
                <Link className="nav" to = '/itali'>Итальянская кухня</Link>
                <Link className="nav" to = '/delivery'>Доставка</Link>
            </nav>
            <Routes>
                <Route path="/home" element={ < App/> }/>
                
            </Routes>

            </Router>

        
    )
}

export default Nav;