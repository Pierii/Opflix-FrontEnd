import React from 'react';
import logo from "../../assets/img/OpflixLogo2.png";
import spike from "../../assets/img/spike.png";
import { Link } from "react-router-dom";

function Nav(){
    return(
        <nav>
        <img src={logo} width="20%" />
        
        <img className="spike" src={spike} alt="Spike sentado" height="200" width="100" />
        <Link className="login_top" to="/login">Login</Link>
      </nav>
        );
    }

    export default Nav;