import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from 'routes.js';
import Menu from 'components/Menu';

const switchRoutes = (
  <Switch>
    {
      routes.map((prop, key) => 
        // (prop.path === "/") ?
          // (
            <Route
              exact
              path={prop.path}
              component={prop.component}
              key={key}
            />
          // ) : (
          //   <Route 
          //     path={prop.path}
          //     component={prop.component}
          //     key={key}
          //   />
          // )
      )
    }
  </Switch>
);

class App extends Component {
  render() {
    return (
      <div className="container-fulid">
        <Menu />
        {switchRoutes}
      </div>
    );
  }
}

export default App;