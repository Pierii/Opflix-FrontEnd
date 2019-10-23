import React, { Component } from 'react';

import logo from "../../assets/img/OpflixLogo2.png";

import Nav from "../../components/Nav/Nav";

import Footer from "../../components/Footer/Footer";
import { parseJwt } from "../../services/auth";

class LancamentosAdmin extends Component {
    constructor() {
        super();
        this.state = {
            Permissao: ''
        }; this.state = {
            lista: [
            ],
            Titulo: '',
            Sinopse: '',
            Veiculo: '',
            TempoDuracao: '',
            IdCategoria: '',
            DataLancamento: '',
            Formato: ''
        };
        this.cadastrarLancamento = this.cadastrarLancamento.bind(this);
    }

    cadastrarLancamento(event) {
        event.preventDefault();
        fetch("http://localhost:5000/api/lancamentos", {
            method: "POST",
            body: JSON.stringify({ Titulo: this.state.Titulo, Sinopse: this.state.Sinopse, Veiculo: this.state.Veiculo, TempoDuracao: this.state.TempoDuracao, IdCategoria: this.state.IdCategoria, DataLancamento: this.state.DataLancamento, Formato: this.state.Formato}),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then(response => response.json())
            .catch(error => console.log(error));
    }

    atualizarTitulo(event) {
        this.setState({ Titulo: event.target.value })
    }

    atualizarSinopse(event) {
        this.setState({ Sinopse: event.target.value })
    }

    atualizarVeiculo(event) {
        this.setState({ Veiculo: event.target.value })
    }

    atualizarTempoDuracao(event) {
        this.setState({ TempoDuracao: event.target.value })
    }

    atualizarIdCategoria(event) {
        this.setState({ IdCategoria: event.target.value })
    }
    
    atualizarDataLancamento(event) {
        this.setState({ DataLancamento: event.target.value })
    }

    atualizarFormato(event) {
        this.setState({ Formato: event.target.value })
    }

    componentDidMount() {
        this.setState({ Permissao: parseJwt().Permissao })
    }

    render() {
        return (
            <div>
                <header className="cabecalhoPrincipal">
                    <div className="container">

                        <nav className="cabecalhoPrincipal-nav">
                            {this.state.Permissao}
                        </nav>
                    </div>
                </header>

                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro">
                        <h1 className="conteudoPrincipal-cadastro-titulo">Lançamentos</h1>
   
                        <div className="container" id="conteudoPrincipal-cadastro">
                            <h2 className="conteudoPrincipal-cadastro-titulo">
                                Cadastrar Lançamento
                        </h2>
                            <form onSubmit={this.cadastrarLancamento}>
                                <div className="listagem">
                                    <input
                                        type="text"
                                        className="className__titulo"
                                        id="input__titulo"
                                        placeholder="Título"
                                        value={this.state.Titulo}
                                        onChange={this.atualizarTitulo.bind(this)}
                                    />
                                    <input
                                        type="text"
                                        className="className__sinopse"
                                        id="input__sinopse"
                                        placeholder="Sinopse"
                                        value={this.state.Sinopse}
                                        onChange={this.atualizarSinopse.bind(this)}
                                    />
                                    <input
                                        type="text"
                                        className="className__veiculo"
                                        id="input__veiculo"
                                        placeholder="Veículo"
                                        value={this.state.Veiculo}
                                        onChange={this.atualizarVeiculo.bind(this)}
                                    />
                                    <input
                                        type="text"
                                        className="className__tempoduracao"
                                        id="input__tempoduracao"
                                        placeholder="Tempo de Duração"
                                        value={this.state.TempoDuracao}
                                        onChange={this.atualizarTempoDuracao.bind(this)}
                                    />
                                    <input
                                        type="text"
                                        className="className__idcategoria"
                                        id="input__idcategoria"
                                        placeholder="IdCategoria"
                                        value={this.state.IdCategoria}
                                        onChange={this.atualizarIdCategoria.bind(this)}
                                    />
                                    <input
                                        type="text"
                                        className="className__datalancamento"
                                        id="input__datalancamento"
                                        placeholder="Data de Lançamento"
                                        value={this.state.DataLancamento}
                                        onChange={this.atualizarDataLancamento.bind(this)}
                                    />
                                    <input
                                        type="text"
                                        className="className__formato"
                                        id="input__formato"
                                        placeholder="Formato"
                                        value={this.state.Formato}
                                        onChange={this.atualizarFormato.bind(this)}
                                    />
                                    <button
                                        id="btn__cadastrar"
                                        className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                                    >
                                        Cadastrar
                            </button>
                                </div>
                            </form>
                        </div>

                    </section>
                </main>

                <Footer></Footer>
            </div>);
    }
}

export default LancamentosAdmin;