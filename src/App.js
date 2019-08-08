import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './componnets/Header';
import WelcomePage from './componnets/WelcomePage';
import NotFound from './componnets/NotFound';
import Events from './componnets/containers/Events';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/events" component={Events} />
        <Route path="*" component={NotFound} />
      </Switch>
      {/* <WelcomePage /> */}
      </div>
    </div>
  );
}

export default App;
