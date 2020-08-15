import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import Form from '../../components/Form';
import Post from '../../components/Post'
export default (props)=>{
    const forms = [
        {id: 1, type: "input", name_input:'rua', id_input: "crua", text_label:"Rua"},
        {id: 2, type: "input", name_input:'num_casa', id_input: "cnum_casa", text_label:"Numero"}
    ];

    const text = "Faça parte da associação, venha junto consco tornar o Orla um lugar cada vez melhor para todos. Ganhe acesso a privilegios exclusivos! Sua participação é muito importante para nós.";
    return(
    <>
        <Header/>
        <Menu/>
        <Post title="Associe-se" subtitle="Venha fazer parte da associação Orla" text={text}/>
        <Form list={forms}/>
        <Footer/>
    </>
    );
}