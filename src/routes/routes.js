import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/catalog/list-catalog';
import DetailCatalog from '../pages/catalog/detail-catalog'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/catalog/:id" component={DetailCatalog} />
        </Switch>
    </BrowserRouter>

);

export default Routes;
