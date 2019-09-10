import React, {Component} from 'react';
import {Redirect, Route, Switch,} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
//import AnimatedRouter from 'react-animated-router';
import 'react-animated-router/animate.css';
import {RRH} from "./page/RRH";
import {Page1} from "./page/RRH/Page/page1";
import {Page2} from "./page/RRH/Page/page2";
import {Page3} from "./page/RRH/Page/page3";
import {Page4} from "./page/RRH/Page/page4";
import {Page5} from "./page/RRH/Page/page5";
import {Page6} from "./page/RRH/Page/page6";
import {Page7} from "./page/RRH/Page/page7";
import {Page8} from "./page/RRH/Page/page8";
import {Page9} from "./page/RRH/Page/page9";
import {Page10} from "./page/RRH/Page/page10";
import {Page11} from "./page/RRH/Page/page11";
import {Page12} from "./page/RRH/Page/page12";
import {Page13} from "./page/RRH/Page/page13";
import {Page14} from "./page/RRH/Page/page14";
import {Page15} from "./page/RRH/Page/page15";
import {Page16} from "./page/RRH/Page/page16";
import {Page17} from "./page/RRH/Page/page17";
import {Page18} from "./page/RRH/Page/page18";
import {Page19} from "./page/RRH/Page/page19";
import {Page20} from "./page/RRH/Page/page20";
import {Page21} from "./page/RRH/Page/page21";
import {End} from "./page/RRH/Page/end";


export class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        path="/rrh"
                        component={routeProps => <RRH {...routeProps} />}
                    />
                    <Route
                        path="/page1"
                        component={routeProps => <Page1 {...routeProps} />}
                    />
                    <Route
                        path="/page2"
                        component={routeProps => <Page2 {...routeProps} />}
                    />
                    <Route
                        path="/page3"
                        component={routeProps => <Page3 {...routeProps} />}
                    />
                    <Route
                        path="/page4"
                        component={routeProps => <Page4 {...routeProps} />}
                    />
                    <Route
                        path="/page5"
                        component={routeProps => <Page5 {...routeProps} />}
                    />
                    <Route
                        path="/page6"
                        component={routeProps => <Page6 {...routeProps} />}
                    />
                    <Route
                        path="/page7"
                        component={routeProps => <Page7 {...routeProps} />}
                    />
                    <Route
                        path="/page8"
                        component={routeProps => <Page8 {...routeProps} />}
                    />
                    <Route
                        path="/page9"
                        component={routeProps => <Page9 {...routeProps} />}
                    />
                    <Route
                        path="/page10"
                        component={routeProps => <Page10 {...routeProps} />}
                    />
                    <Route
                        path="/page11"
                        component={routeProps => <Page11 {...routeProps} />}
                    />
                    <Route
                        path="/page12"
                        component={routeProps => <Page12 {...routeProps} />}
                    />
                    <Route
                        path="/page13"
                        component={routeProps => <Page13 {...routeProps} />}
                    />
                    <Route
                        path="/page14"
                        component={routeProps => <Page14 {...routeProps} />}
                    />
                    <Route
                        path="/page15"
                        component={routeProps => <Page15 {...routeProps} />}
                    />
                    <Route
                        path="/page16"
                        component={routeProps => <Page16 {...routeProps} />}
                    />
                    <Route
                        path="/page17"
                        component={routeProps => <Page17 {...routeProps} />}
                    />
                    <Route
                        path="/page18"
                        component={routeProps => <Page18 {...routeProps} />}
                    />
                    <Route
                        path="/page19"
                        component={routeProps => <Page19 {...routeProps} />}
                    />
                    <Route
                        path="/page20"
                        component={routeProps => <Page20 {...routeProps} />}
                    />
                    <Route
                        path="/page21"
                        component={routeProps => <Page21 {...routeProps} />}
                    />

                    <Route
                    path="/end"
                    component={routeProps => <End {...routeProps} />}
                    />

                    <Redirect to="/rrh"/>
                </Switch>
            </BrowserRouter>

        );
    }
}
