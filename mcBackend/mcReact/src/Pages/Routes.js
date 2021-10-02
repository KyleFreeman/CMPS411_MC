import React from 'react';
import Home from './Home/Home';
import Upload from './App/App';
import Gallery from './Gallery/Gallery';
import About from './About/About';
import NavBar from '../Components/NavBar/NavBar';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Upload" component={Upload} />
        <Route exact path="/Gallery" component={Gallery} />
        <Route exact path="/About" component={About} />
      </Switch>
    </div>
  );
};