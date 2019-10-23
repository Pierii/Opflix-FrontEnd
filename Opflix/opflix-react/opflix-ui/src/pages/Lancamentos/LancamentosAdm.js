import React, { Component } from 'react';

import logo from "../../assets/img/OpflixLogo2.png";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

import "../../assets/css/listas.css";
import Axios from "axios";

import { Link } from "react-router-dom";

class Lancamento extends Component{

    constructor(){
        super();
        this.state = {
            lista: []
        };
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/api/lancamentos',{
            headers: {
                Authorization: 'Bearer '+localStorage.getItem('usuario-opflix')
            }
        })
            .then(data => {
                this.setState({lista: data.data});
                console.log(this.state)
            })
            .catch(erro => {
                console.log(erro);
            });
        }

    render() {
        return(
            <div>
                {/* <Nav></Nav> */}
                <div className="lancamentosCorpo">
                <Link className="login_a" to="/cadastrarLancamentos">Cadastrar Lancamentos</Link>                    
                            <table id="tabela-lista">
                                <thead>
                                    <tr>
                                        <th>Título</th>
                                        <th>Sinopse</th>
                                        <th>Veículo</th>
                                        <th>Tempo de Duraação</th>
                                        <th>IdCategoria</th>
                                        <th>Data de lançamento</th>
                                        <th>Formato</th>
                                    </tr>
                                </thead>
                                <tbody id="tabelaListaCorpo">
                                    {this.state.lista.map(element => {
                                        return (
                                            <tr>
                                                <td>{element.titulo}</td>
                                                <td>{element.sinopse}</td>
                                                <td>{element.idVeiculos}</td>
                                                <td>{element.tempoDuracao}</td>
                                                <td>{element.idCategoriaNavigation}</td>
                                                <td>{element.dataLancamento}</td>
                                                <td>{element.idFormato}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
export default Lancamento;