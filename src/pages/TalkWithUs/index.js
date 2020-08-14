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
    return(
        <>
            <Header/>
            <Menu/>
            <section id="sect">
                <h4>Fale Conosco</h4>
                <p>Preencha o formulario para enviar sua mensagem</p>
                <form>
                    <Form/>
                    <label id="labelmsg" htmlFor="mensagem">Mensagem:</label>
                    <textarea id="cmensagem" name="mensagem" rows="15" cols="95"></textarea>
                    <button onClick={enviar}>Enviar</button>
                </form>
            </section>
            
            <Footer/>
        </>
    );
}