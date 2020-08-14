import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import Post from '../../components/Post';
import data_eventos from '../../components/data_eventos';

export default (props)=>{
    const show_events = ()=>{
        function posting(elem){
            return <Post id={elem.id} title={elem.nome} text={elem.descricao} date={elem.data}/>
        }
        return data_eventos.map(posting);
    }

    return (
    <>
        <Header/>
        <Menu/>
            {show_events()}
        <Footer/>
    </>
    );
}