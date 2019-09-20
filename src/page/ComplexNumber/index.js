import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Nav} from "../Nav";
import {ComplexHome} from "./Page/home";
import {ComplexPage1} from "./Page/page1";


export class ComplexNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
          <div>
              <Nav/>
              <Switch>
                  <Route
                      path={`${this.props.match.url}/home`}
                      component={routeProps => <ComplexHome {...routeProps} />}
                  />
                  <Route
                      path={`${this.props.match.url}/page1`}
                      component={routeProps => <ComplexPage1 {...routeProps} />}
                  />
                  <Route
                      path={`${this.props.match.url}/home`}
                      component={routeProps => <ComplexHome {...routeProps} />}
                  />
                  <Redirect to={`${this.props.match.url}/home`} />
              </Switch>

          </div>

        );
    }
}
