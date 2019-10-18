import React from 'react';
import './App.css';

import logo from "../src/assets/img/Opflix logo2.png";
import spike from "../src/assets/img/527033-527032-hunter_x_hunter_1100880.jpg.png";



function App() {
  return (
    <div className="corpo">
      <nav>
        <img src={logo} width="20%" />
        <img src={spike} alt="Spike sentado" height="200" width="100" />
        <a href="login.js">Login</a>
      </nav>
      <div className="homeCorpoTop">
        <h2>Explore o mundo dos filmes!</h2>
        <p>Tudo é possível com apenas alguns cliques! <br></br>Aproveite toda a variedade que o nosso site tem a oferecer!</p>
        <button>Já testou? Faça login!</button>
      </div>
      <div className="homeCorpoBot">
        <h2>Comece agora mesmo!</h2>
        <p>Efetue o login e desfrute todo o poder que está disponível! <br></br> Não perca tempo!</p>
      </div>
      <footer>
        <img src={logo} width="5%" />
        <p> © 2019-2019, Opflix Inc.</p>
      </footer>
    </div>
  );
}

export default App;
