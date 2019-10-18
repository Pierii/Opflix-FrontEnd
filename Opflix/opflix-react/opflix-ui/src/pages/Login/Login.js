import React, { Component } from "react";

import logo from "../src/assets/img/Opflix logo2.png";

class Login extends Component {

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
                    <button className="submit_login" id="">Fazer login</button>
                </div>
                    <a href="">Não tem uma conta?</a>
            </section>
        );
    }
}

export default Login;

