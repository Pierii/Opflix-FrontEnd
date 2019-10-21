import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './pages/Home/App';
import Categorias from './pages/Categorias/Categorias';
import NaoEncontrado from './pages/NaoEncontrado/NaoEncontrado';
import Login from "./pages/Login/Login";
import Lancamentos from "./pages/Lancamentos/Lancamentos";
import Cadastro from "./pages/Cadastro/Cadastro";

import * as serviceWorker from './serviceWorker';

//rotas

const RotaPrivada = ({ component: Component }) => (
    <Route
        render={props =>
            localStorage.getItem("usuario-opflix") !== null ?
                <Component {...props} />
                :
                <Redirect
                    to={{ pathname: "/login", state: { from: props.location } }}
                />
        }
    >
    </Route>
)
const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={App} />
                <RotaPrivada path='/categorias' component={Categorias} />
                <RotaPrivada path="/lancamentos" component={Lancamentos} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Cadastro} />
                <Route component={NaoEncontrado} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
