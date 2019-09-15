import React, {Component} from 'react';
import {Redirect, Route, Switch,} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
//import AnimatedRouter from 'react-animated-router';
import 'react-animated-router/animate.css';

import {RRH} from "./page/RRH";
import {HomePage} from "./page/HomePage";
import {ComplexHome} from "./page/ComplexNumber";

export class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        path="/home"
                        component={routeProps => <HomePage {...routeProps} />}
                    />
                    <Route
                        path="/rrh"
                        component={routeProps => <RRH {...routeProps} />}
                    />
                    <Route
                        path="/complex-home"
                        component={routeProps => <ComplexHome {...routeProps} />}
                    />
                    <Redirect to="/home"/>
                </Switch>
            </BrowserRouter>

        );
    }
}
