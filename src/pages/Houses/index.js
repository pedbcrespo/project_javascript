import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import data_casa_terreno from '../../components/data_casas_terreno';

export default (props)=>{

    function imagem(list){ 
        
        return list.map(house => {
            return <figure className="campPhoto">
                <img key={house.id} className="Photo" src={house.link} alt=""/>
                <h5>numero: {house.numero}</h5>
                <h6>rua: {house.rua}</h6>
            </figure>
        });
    }
    return (
    <>
        <Header/>
        <Menu/>
        {imagem(data_casa_terreno)}
        <Footer/>
    </>
    );
}