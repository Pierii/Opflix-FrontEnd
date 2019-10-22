import React, { Component } from "react";

import logo from "../../assets/img/OpflixLogo2.png";

import "../../assets/css/login.css";

import { Link } from "react-router-dom";

import Axios from "axios";
// import Footer from "../../components/Footer/Footer";

class Login extends Component {

    constructor() {
        super();
        localStorage.removeItem("usuario-opflix");
        this.state = {
            Email: "",
            Senha: "",
            Erro: ""
        }
    }

    atualizaEstadoEmail = (event) => {
        console.log(event.target.value)
        this.setState({ Email: event.target.value });
    }

    atualizaEstadoSenha = (event) => {
        this.setState({ Senha: event.target.value });
    }

    efetuarLogin = (event) => {
        event.preventDefault();

        let url = "http://localhost:5000/api/login";

        Axios.post(url, {
            headers: {
                "Content-Type": "application/json"
            },
            Email: this.state.Email,
            Senha: this.state.Senha,
        })
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data.token);
                    localStorage.setItem("usuario-opflix", response.data.token);
                    this.props.history.push('/lancamentos');
                } else {
                    console.log('algo deu errado :(');
                }
            })
            .catch(Erro => {
                this.setState({ Erro: "Usuário ou senha inválidos" });
                console.log(Erro);
            });
    }

    render() {
        return (
            <section className="loginCorpo">
                <img src={logo} />
                <form onSubmit={this.efetuarLogin}>
                    <div input_login>
                        <input
                            className="input_login"
                            placeholder="Endereço de Email"
                            onInput={this.atualizaEstadoEmail}
                            type="text"
                            name="username"
                            id="login_email"
                        />
                    </div>
                    <div input_senha>
                        <input
                            className="input__login"
                            onInput={this.atualizaEstadoSenha}
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
                </form>
            </section>
        );
    }
}

export default Login;
