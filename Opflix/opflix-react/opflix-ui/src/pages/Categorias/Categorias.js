import React, { Component } from 'react';

import logo from "../../assets/img/OpflixLogo2.png";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

import "../../assets/css/listas.css";
import Axios from "axios";

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
                <Nav></Nav>
                <div className="lancamentosCorpo">
                    
                            <table id="tabela-lista">
                                <thead>
                                    <tr>
                                        <th>Categoria</th>
                                    </tr>
                                </thead>
                                <tbody id="tabelaListaCorpo">
                                    {this.state.lista.map(element => {
                                        return (
                                            <tr >
                                                <td>{element.idCategoria}</td>
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