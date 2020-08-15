import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import Form from '../../components/Form';

export default (props)=>{
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMsg] = useState('');

    function enviar(event){
        setNome(document.getElementById('cnome').value);
        setEmail(document.getElementById('cemail').value);
        setMsg(document.getElementById('cmensagem').value);

        console.log({
            nome: nome,
            email: email,
            mensagem: mensagem
        });
    }

    const forms = [{type: "textarea", name_input:'mensagem', id_input: "cmensagem", text_label:"Mensagem"}]
    return(
        <>
            <Header/>
            <Menu/>
            <section id="sect">
                <h4>Fale Conosco</h4>
                <p>Preencha o formulario para enviar sua mensagem</p>
                <form>
                    <Form list={forms}/>
                    <button onClick={enviar}>Enviar</button>
                </form>
            </section>
            
            <Footer/>
        </>
    );
}