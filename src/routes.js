import React from 'react';

// para criar rotas, é necessario instalar o react-router-dom
// no terminal, digite: npm install --save react-router-dom
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Initial from './pages/Initial';
import Events from './pages/Events';
import Houses from './pages/Houses';
import Assosiation from './pages/Assosiation';
import Desassociation from './pages/Desassociation';
import TalkWithUs from './pages/TalkWithUs';
import About from './pages/About';
import SellingHouse from './pages/SellingHouse';

export default (props)=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Initial}/>
                <Route path="/eventos" component={Events}/>
                <Route path="/casas" component={Houses}/>
                <Route path="/sobre" component={About}/>
                <Route path="/associar_se" component={Assosiation}/>
                <Route path="/desassociar_se" component={Desassociation}/>
                <Route path="/fale_conosco" component={TalkWithUs}/>
                <Route path="/vender" component={SellingHouse}/>
            </Switch>
        </BrowserRouter>
    );
}
