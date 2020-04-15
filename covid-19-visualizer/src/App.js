import React from 'react';
import MapContainer from './components/MapContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';


function App() {
  return (
    <div>
      <NavBar />
      <LandingPage />
    </div>
  );
}

export default App;
