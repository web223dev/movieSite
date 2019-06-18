import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from 'routes.js';
import Navbar from 'components/Navbar';

const switchRoutes = (
  <Switch>
    {
      routes.map((prop, key) => 
        (prop.path === "/") ?
          (
            <Route
              path={prop.path}
              exact
              component={prop.component}
              key={key}
            />
          ) : (
            <Route 
              path={prop.path}
              component={prop.component}
              key={key}
            />
          )
      )
    }
  </Switch>
);

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        {switchRoutes}
      </div>
    );
  }
}

export default App;