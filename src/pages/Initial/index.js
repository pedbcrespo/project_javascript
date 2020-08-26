import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import EventTable from '../../components/EventTable';
import Carousel from 'react-bootstrap/Carousel';
import blue_plan from '../../plano_generico.png';
export default (props) =>{
    return (
    <>
        <Header/>
        <Menu/>
        
        <Carousel>
            <Carousel.Item>
                <a href="/"><img className="image_carousel" src={blue_plan} alt="Venha conhecer"/></a>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a href="/"><img className="image_carousel" src={blue_plan} alt="Restaurante Velas do Orla"/></a>

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a href="/associar_se"><img className="image_carousel" src={blue_plan} alt="Associe-se"/></a>

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
        <div id="information">
        <h3>Sobre nós</h3>
        <p>Bem vindo ao Condominio Orla 500, um dos melhores lugares, se não o melhor, para se viver em todo o Rio de Janeiro.
        Localizado perto da praia rasa, o clima paradisiaco prevalece o ano todo. A sociedade do condominio contribui para que o convivio seja cada vez mais pacifico e relaxante e por conta disso, frequentemente ocorre eventos afim de aproveitar cada vez mais esse mais que perfeito local pra se viver. Venha conhecer este maravilhoso lugar. Aqui voce comprar ou alugar casas. 
        </p>
        </div>
        <EventTable/>

        <Footer/>
    </>
    );
}