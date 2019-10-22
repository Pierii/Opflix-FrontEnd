import React, { Component } from 'react';

import logo from '../../assets/img/OpflixLogo2.png';
import Axios from 'axios';

// import "../../assets/css/style.css";

class Lancamentos extends Component {

    constructor() {
        super();
        this.state = {
            lista: []
        };
    }
    componentDidMount() {
        Axios.get('http://192.168.7.85:5000/api/Lancamentos')
            .then(data => {
                this.setState({ lista: data.data });
            })
            .catch(erro => {
                console.log(erro);
            });
    }

    listaAtualizada = () => {
        fetch('http://192.168.7.85:5000/api/Lancamentos')
            .then(response => response.json())
            .then(data => this.setState({ lista: data }));
    }

    adicionaItem = (event) => {
        event.preventDefault();
        console.log(this.state.titulo);
        fetch('http://192.168.7.85:5000/api/Lancamentos', {
            method: "POST",
            body: JSON.stringify({ Titulo: this.state.Titulo, DataLancamento: this.state.DataLancamento, TempoDuracao: this.state.TempoDuracao, idCategoriaNavigation: this.state.idCategoriaNavigation, Sinopse: this.state.Sinopse}),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(this.listaAtualizada())
            .catch(error => console.log(error))

        // 
        // headers: 

    }

    adicionaEvento = () => {
        let valores_lista = this.state.lista;
        let lancamento = { nome: this.state.nome }

        valores_lista.push(lancamento);

        this.setState({ lista: valores_lista });
    }

    atualizarNome = (event) => {
        this.setState({ nome: event.target.value })
        console.log(this.state);
    }

    atualizarData = (event) => {
        this.setState({ dataEvento: event.target.value })
        console.log(this.state);
    }


    render() {
        return (
            <div >
                <header className="cabecalhoPrincipal">
                    <div className="container">
                        <img src={logo} />

                        <nav className="cabecalhoPrincipal-nav">
                            Administrador
                        </nav>
                    </div>
                </header>

                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro">

                        <div className="container" id="conteudoPrincipal-lista">

                            <table id="tabela-lista">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Lancamento</th>
                                        <th>Tempo de Duração</th>
                                        <th>Veículo</th>
                                        <th>Categoria do Lancamento</th>

                                    </tr>
                                </thead>

                                <tbody id="tabela-lista-corpo">
                                    {
                                        this.state.lista.map(element => {
                                            return (
                                                <tr>
                                                    <td>{element.idEvento}</td>
                                                    <td>{element.titulo}</td>
                                                    <td>{element.dataEvento}</td>
                                                    <td>{element.ativo ? 'Netflix' : 'Amazon Prime Video'}</td>
                                                    <td>{element.idCategoriaNavegation}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>

                        </div>

                        <div className="container" id="conteudoPrincipal-cadastro">
                            <h2 className="conteudoPrincipal-cadastro-titulo">Cadastrar Lançamento</h2>
                            <div className="container">

                                <input
                                    type="text"
                                    className="className__evento"
                                    id="evento__titulo"
                                    placeholder="título do lançamento"
                                    value={this.state.nome}
                                    onInput={this.atualizarNome}
                                />

                                <input
                                    type="text"
                                    id="evento__localizacao"
                                    placeholder="duração"
                                />

                                <input
                                    type="text"
                                    id="evento__data"
                                    placeholder="dd/MM/yyyy"
                                    value={this.state.dataEvento}
                                    onInput={this.atualizarData}
                                />
                                <select id="option__acessolivre">
                                    <option value="1">Ativo</option>
                                    <option value="0">Desativo</option>
                                </select>
                                <select id="option__tipoevento">
                                    <option value="0" disabled>Categoria do Lançamento</option>
                                </select>
                                <textarea
                                    rows="3"
                                    cols="50"
                                    placeholder="descrição do evento"
                                    id="evento__descricao"></textarea>

                            </div>
                            <button
                                id="btn__cadastrar"
                                onClick={this.adicionaItem}
                                className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                            >Cadastrar</button>
                        </div>
                    </section>
                </main>

            </div>
        );
    }
}

export default Lancamentos