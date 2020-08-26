import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import Button from 'react-bootstrap/Button';
import icon from '../../home_icon.png';
import api from '../../api/api';
export default class Houses extends Component{

    state = { lista_lotes: [] }

    async componentDidMount(){
        const res = await api.get('/lotes/');

        this.setState({lista_lotes: res.data});
    }
    
    render(){

        function imagem(list){ 
        
            return list.map(house => {
                return (<figure className="campPhoto" key={house.id}>
                    <img className="image_carousel" src={icon} alt=""/>
                    <h3><strong>Numero</strong>: {house.numero_serie}</h3>
                    <h6><strong>Rua</strong>: {house.rua}</h6>
    
                    <Button variant="primary">Comprar</Button>
                    <Button variant="info">Alugar</Button>
                </figure>)
            });
        }


        return (
        <>
            <Header/>
            <Menu/>
            {imagem(this.state.lista_lotes)}
            <Footer/>
        </>
        );
    }
}