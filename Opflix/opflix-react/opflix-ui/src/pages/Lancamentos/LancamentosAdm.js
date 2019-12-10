import React, { Component } from 'react';

import logo from "../../assets/img/OpflixLogo2.png";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

import "../../assets/css/listas.css";
import Axios from "axios";

import { Link } from "react-router-dom";

class LancamentosAdm extends Component{

    constructor(){
        super();
        this.state = {
            lista: []
        };
    }

    componentDidMount(){
        Axios.get('http://192.168.5.84:5000/api/lancamentos',{
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
                <Nav></Nav>
                <nav className="cabecalhoPrincipal-nav">
                            {this.state.Permissao}
                        </nav>
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
                                                <td>{element.idVeiculosNavigation.veiculo}</td>
                                                <td>{element.tempoDuracao}</td>
                                                <td>{element.idCategoriaNavigation.categoria}</td>
                                                <td>{element.dataLancamento}</td>
                                                <td>{element.idFormatoNavigation.formato}</td>
                                                <Link className="local_a" to="/localizacoes">Ver Mapa</Link>                    
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
export default LancamentosAdm;