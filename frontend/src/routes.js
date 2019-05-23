import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'screens/home';
import Restaurants from 'screens/restaurants';
import ShowRestaurant from 'screens/show-restaurant';
import NewOrder from 'screens/order/new';
import ShowOrder from 'screens/order/show';

import history from './history';

export default function Routes() {
    return (
        <BrowserRouter history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/restaurants" component={Restaurants} />
                <Route exact path="/restaurants/:id" component={ShowRestaurant} />
                <Route exact path="/orders/new" component={NewOrder} />
                <Route exact path="/orders/:id" component={ShowOrder} />
            </Switch>
        </BrowserRouter>
    );
}
