import React from 'react';
import './App.css';

import '../../assets/css/style.css';
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";


import { Link } from "react-router-dom";

function App() {
  return (
    <div className="corpo">
      <Nav></Nav>
      <div className="homeCorpoTop">
        <div className="texto">
        <h2>Explore o mundo dos filmes!</h2>
        <p>Tudo é possível com apenas alguns cliques! <br></br>Aproveite toda a variedade que o nosso site tem a oferecer!</p>
        </div>
        <Link className="login_btn" to="/login">Já testou? Faça login!</Link>        
      </div>
      <div className="homeCorpoBot">
        <h2>Comece agora mesmo!</h2>
        <p>Efetue o login e desfrute todo o poder que está disponível! <br></br> Não perca tempo!</p>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
