import React, { Component } from "react";

import logo from "../../assets/img/OpflixLogo2.png";

import { Link } from "react-router-dom";

import Axios from "axios";

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            senha: "",
            erro: ""
        }
    }
    atualizaEstadoEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    atualizaEstadoSenha = (event) => {
        this.setState({ senha: event.target.value });
    }

    efetuarLogin = (event) => {
        event.preventDefault();

        Axios.post("http://192.168.7.85:5000/api/login", {
            email: this.state.email,
            senha: this.state.senha
        })
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data.token)
                    localStorage.setItem("usuario-opflix", response.data.token);
                    this.props.history.push("/categorias");
                } else {
                    console.log("meh");
                }
            })
            .catch(erro => {this.setState({erro: "Usuário ou senha inválidos"});
                console.log(erro);
            });
        }

    render() {
        return (
            <section className="loginCorpo">
                <img src={logo} />
                <div input_login>
                    <input
                        className="input_login"
                        placeholder="Endereço de Email"
                        type="text"
                        name="username"
                        id="login_email"
                    />
                </div>
                <div input_senha>
                    <input
                        className="input__login"
                        placeholder="Senha"
                        type="password"
                        name="password"
                        id="login_senha"
                    />
                </div>
                <div className="button">
                    <button className="submit_login">Fazer login</button>
                </div>
                <Link className="login_a" to="/cadastro">Não tem uma conta?</Link>
            </section>
        );
    }
}

export default Login;

