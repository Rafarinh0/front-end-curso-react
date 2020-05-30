import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (
    //BrowserRouter vai definir que a gente tá utilizando as rotas através de um navegador
    //Switch vai permitir que apenas uma única rota seja chamada ao mesmo tempo
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/products/:id" component={Product}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
