import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

export default (props)=>{
    return (
        <>
            <Header/>
            <Menu/>
            <section className="topic">
                <img src="" alt=""/>
                <h1>Orla 500</h1>
                <p>Condominio Orla 500 da cidade de Cabo Frio segundo distrito, construido proximo a praia raza, conta com mais de 1000 loteamentos e terrenos disponiveis para construção. Um verdadeiro paraiso para aqueles que buscam paz, tranquilidade e conforto num ambiente paradisiaco</p>
            </section>

            <Footer/>
        </>
    );
}
