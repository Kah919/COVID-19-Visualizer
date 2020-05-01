import React, { useState } from 'react';
import USAMap from "react-usa-map";
import StateDataModal from './StateDataModal';
// import Modal from 'react-bootstrap/Modal';
// import Button from '@material-ui/core/Button';
 
const Map = ({ states }) => {
  const [stateInfo, setStateInfo ] = useState({});
  const [showModal, setShowModal] = useState(false);
  

  const screenSize = () => {
    if(window.innerWidth > 1000) {
      return window.innerWidth
    } 
    return window.innerWidth - 10
  }

  const sortByCases = () => {
    return states.sort((a, b) => {
      return a.positive - b.positive
    })
  }
 
  const statesCustomConfig = () => {
    const stateObj = {}
    const sorted = sortByCases();
    let count = 0

    sorted.forEach(state => {
        stateObj[state.state] = {
            fill: `rgb(0, ${count}, 0, 0.8)`,
            clickHandler: event => {
                console.log(`Custom handler for ${event.target.dataset}`, state )
                setStateInfo(state)
                setShowModal(true)
            }
        }
        count += 5
    })

    if(states.length > 0) {
      const largest = sorted[sorted.length - 1]
      stateObj[largest.state].fill = 'red'
    }
    
    return stateObj
  };

  const stopModal = () => {
    setShowModal(false)
  }

    const x = statesCustomConfig();
    const y = screenSize(); // add width={y} to USAMap for size

    return (
      <div>
        <USAMap className="map" width="" customize={x} title="United States of America COVID-19"/>

        {showModal && (
          <StateDataModal
            showModal={ showModal }
            stopModal={ stopModal }
            stateInfo={ stateInfo }
          />
        )}
      </div>
    );
  
}
 
export default Map;