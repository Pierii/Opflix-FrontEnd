import React from 'react';
import logo from "../../assets/img/OpflixLogo2.png";

import "../../assets/css/login.css"

function FooterLogin(){
    return(
        <footer className="fl">
        <img src={logo} width="5%" />
        <p> © 2019-2019, Opflix Inc.</p>
      </footer>
        );
    }

    export default FooterLogin;