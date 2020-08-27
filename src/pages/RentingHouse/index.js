import React from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Form from '../../components/Form';

export default (props)=>{
    const forms = [
        {id: 1, type: "input", name_input:'num_casa', id_input: "cnum_casa", text_label:"Numero",value_input: props.match.params.num_lote},
        {id: 2, type: "input", name_input:'quant_dias', id_input: "cquant_dias", text_label:"Quantidade de dias",}
    ];

    return (
        <>
            <Header/>
            <Menu/>
            <Form list={forms}/>
            <Footer/>
        </>
    );
}