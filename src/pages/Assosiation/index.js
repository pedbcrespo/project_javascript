import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import Form from '../../components/Form';

export default (props)=>{
    const forms = [
        {type: "input", name_input:'rua', id_input: "crua", text_label:"Rua"},
        {type: "input", name_input:'num_casa', id_input: "cnum_casa", text_label:"Numero"}
    ];
    return(
    <>
        <Header/>
        <Menu/>
        <Form list={forms}/>
        <Footer/>
    </>
    );
}