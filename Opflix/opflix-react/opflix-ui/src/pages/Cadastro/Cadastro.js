import React, { Component } from "react";

import logo from "../../assets/img/OpflixLogo2.png";

import { Link } from "react-router-dom";

import "../../assets/css/login.css";

import FooterLogin from "../../components/Footer/FooterLogin";

class Cadastro extends Component {
    constructor(){
        super();
        this.state = {
            Nome: '',
            Email: '',
            Senha: '',
            Cpf: ''
        };
    
        this.cadastrarUsuario = this.cadastrarUsuario.bind(this);
    }
    
    cadastrarUsuario(event) {
        event.preventDefault();
        fetch("http://192.168.5.84:5000/api/usuarios", {
            method: "POST",
            body: JSON.stringify({ Nome: this.state.Nome, Email: this.state.Email, Senha: this.state.Senha, Cpf: this.state.Cpf }),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then(response => response.json())
            .catch(Erro => {
                this.setState({ Erro: "Usuário ou senha inválidos" });
                console.log(Erro);
            });
    }
    
    atualizarNome(event){
        this.setState({ Nome: event.target.value })
    }
    
    atualizarEmail(event){
        this.setState({ Email: event.target.value })
    }
    
    atualizarCpf(event) {
        this.setState({ Cpf: event.target.value })
    }
    
    atualizarSenha(event){
        this.setState({ Senha: event.target.value })
    }
    render() {
        return (
            <div>   
                <form onSubmit={this.cadastrarUsuario}>
                <section className="cadastroCorpo">
                    <img src={logo} />
                    <div input_email>
                        <input
                            className="input_nome"
                            placeholder="Nome"
                            type="text"
                            name="nome"
                            id="cadastro_nome"
                            value={this.state.Nome}
                            onChange={this.atualizarNome.bind(this)}

                        />
                    </div>
                    <div input_cadastro>
                        <input
                            className="input_cadastro"
                            placeholder="Endereço de Email"
                            type="text"
                            name="username"
                            id="cadastro_email"
                            value={this.state.Email}
                            onChange={this.atualizarEmail.bind(this)}
                        />
                    </div>
                    <div input_cpf>
                        <input
                            className="input_cpf"
                            placeholder="CPF"
                            type="text"
                            name="cpf"
                            id="cadastro_cpf"
                            value={this.state.Cpf}
                            onChange={this.atualizarCpf.bind(this)}
                        />
                    </div>
                    <div input_senha>
                        <input
                            className="input_senha"
                            placeholder="Senha"
                            type="password"
                            name="password"
                            id="cadastro_senha"
                            value={this.state.Senha}
                            onChange={this.atualizarSenha.bind(this)}
                        />
                    </div>
                    <div className="button">
                        <button className="submit_cadastro">Fazer cadastro</button>
                    </div>
                    <Link className="cadastro_a" to="/login">Já tem uma conta?</Link>
                    <p style={{ color: "red", textAlign: "center" }}>
                        {this.state.Erro}
                    </p>
                </section>
                </form>
                <FooterLogin></FooterLogin>
            </div>
        )

    }
}
export default Cadastro  