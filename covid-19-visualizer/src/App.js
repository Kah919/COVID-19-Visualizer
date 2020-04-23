import React from 'react';
import MapContainer from './components/MapContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/map" render={() => <MapContainer />} />
        <Route path="/home" render={() => <LandingPage />} />
        <Route path="/" render={() => <LandingPage />} />
      </Switch>
    </Router >
  );
}

export default App;
