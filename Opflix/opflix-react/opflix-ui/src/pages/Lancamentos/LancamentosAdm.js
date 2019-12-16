import React, { Component } from 'react';

import logo from "../../assets/img/OpflixLogo2.png";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

import "../../assets/css/listas.css";
import Axios from "axios";

import { Link } from "react-router-dom";

class LancamentosAdm extends Component {

    constructor() {
        super();
        this.state = {
            lista: []
        };
    }

    componentDidMount() {
        Axios.get('http://192.168.5.84:5000/api/lancamentos', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-opflix')
            }
        })
            .then(data => {
                this.setState({ lista: data.data });
                console.log(this.state)
            })
            .catch(erro => {
                console.log(erro);
            });
    }

    render() {
        return (
            <div>
                <Nav></Nav>
                <div className="lancamentosCorpo">
                    <div className="banner">
                        <div className="buraco"></div>
            <Link className="login_a" to="/cadastrarLancamentos">Cadastrar Lancamentos</Link>
                    </div>
                            {this.state.lista.map(element => {
                                return (
                                    <ul id="item">
                                        <li id="element_t">{element.titulo}</li>
                                        <div id="flex">
                                            <li id="element">Sinopse: {element.sinopse}</li>
                                            <li id="element">Plataforma: {element.idVeiculosNavigation.veiculo}</li>
                                            <li id="element">Tempo: {element.tempoDuracao}</li>
                                            <li id="element">Categoria: {element.idCategoriaNavigation.categoria}</li>
                                            <li id="element">Release: {element.dataLancamento}</li>
                                            <li id="element">Formato: {element.idFormatoNavigation.formato}</li>
                                        </div>
                                    </ul>
                                )
                            })}
                            <Link className="local_a" to="/localizacoes">Ver Mapa</Link>
                </div>
                        <Footer></Footer>
            </div>
                    );
                }
            }
export default LancamentosAdm;