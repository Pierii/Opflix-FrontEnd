import React, { Component } from "react";

import logo from "../../assets/img/OpflixLogo2.png";

import { Link } from "react-router-dom";

import "../../assets/css/login.css"; 

import Axios from "axios";
import FooterLogin from "../../components/Footer/FooterLogin";

class Cadastro extends Component {
    render() {
        return (
            <div>
            <section className="cadastroCorpo">
                <img src={logo} />
            <div input_email>
                <input
                    className="input_nome"
                    placeholder="Nome"
                    type="text"
                    name="nome"
                    id="cadastro_nome"
                />
            </div>
                <div input_cadastro>
                    <input
                        className="input_cadastro"
                        placeholder="Endereço de Email"
                        type="text"
                        name="username"
                        id="cadastro_email"
                    />
                </div>
                <div input_cpf>
                    <input
                        className="input_cpf"
                        placeholder="CPF"
                        type="text"
                        name="cpf"
                        id="cadastro_cpf"
                    />
                </div>
                <div input_senha>
                    <input
                        className="input_senha"
                        placeholder="Senha"
                        type="password"
                        name="password"
                        id="cadastro_senha"
                    />
                </div>
                <div className="button">
                    <button className="submit_cadastro">Fazer cadastro</button>
                </div>
                <Link className="cadastro_a" to="/login">Já tem uma conta?</Link>
            </section>
            <FooterLogin></FooterLogin>
            </div>
        )

    }
}
export default Cadastro  