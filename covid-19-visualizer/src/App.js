import React from 'react';
import MapContainer from './components/MapContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <MapContainer />
    </div>
  );
}

export default App;
