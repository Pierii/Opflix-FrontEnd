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
import CadastrarLancamentos from "./pages/CadastrarLancamentos/CadastrarLancamentos";
import LancamentosAdm from "./pages/Lancamentos/LancamentosAdm";

import * as serviceWorker from './serviceWorker';
import { parseJwt } from './services/auth';

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
const PermissaoAdm = ({ component: Component}) => (
    <Route 
        render={
            props =>
                parseJwt().Permissao === "ADMINISTRADOR" ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                    to={{pathname: "/login", state: {from: props.location}}} />
                )
        }
    />
);

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={App} />
                <PermissaoAdm path='/categorias' component={Categorias} />
                <RotaPrivada path="/lancamentos" component={Lancamentos} />
                <PermissaoAdm path="/lancamentosAdm" component={LancamentosAdm} />
                <PermissaoAdm path="/cadastrarLancamentos" component={CadastrarLancamentos} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Cadastro} />
                <Route component={NaoEncontrado} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
