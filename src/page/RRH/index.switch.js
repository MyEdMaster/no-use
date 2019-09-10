import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route, Switch} from 'react-router-dom';

import {RRH} from './index';
import {Page1} from "./Page/page1";

class PageSwitchReact extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {};

  }

  render() {


    return (
      <Switch>
        <Route
          path={this.props.match.url}
          component={routeProps => <RRH{...routeProps} />}
        />
        <Route
          path={`${this.props.match.url}/page`}
          component={routeProps => <Page1 {...routeProps} />}
        />

        <Redirect to={this.props.match.url} />
      </Switch>
    );
  }
}

PageSwitchReact.i18n = [
  {},
  {}
];

PageSwitchReact.propTypes = {
  // self

  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export const PageSwitch = PageSwitchReact;
