import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import EventTable from '../../components/EventTable';
import Carousel from 'react-bootstrap/Carousel';

import foto_praia from '../../images/praia-do-forte–cabo-frio-regiao-dos-lagos-e1481591349953.jpg';
import reuniao from '../../images/reuniao.jpg';
import almoco from '../../images/almoço.jpg';

export default (props) =>{
    return (
    <>
        <Header/>
        <Menu/>
        <div className="carousel">
            <Carousel>
            <Carousel.Item>
                <a href="/"><img className="image_carousel" src={foto_praia} alt="Venha conhecer"/></a>
                <Carousel.Caption>
                <h3><a href="/">Venha conhecer</a></h3>
                <p>Aqui voce encontra casas e terrenos para comprar ou alugar</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a href="/"><img className="image_carousel" src={almoco} alt="Restaurante Velas do Orla"/></a>

                <Carousel.Caption>
                <h3><a href="/">Restaurante Velas do Orla</a></h3>
                <p>Conheça o restaurante localizado de frente a praia</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a href="/associar_se"><img className="image_carousel" src={reuniao} alt="Associe-se"/></a>

                <Carousel.Caption>
                <h3><a href="/associar_se">Assossie-se</a></h3>
                <p>Venha fazer parte da comunidade Orla</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
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