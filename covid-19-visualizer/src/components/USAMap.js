import React, { useState, useEffect } from 'react';
import USAMap from "react-usa-map";
import StateDataModal from './StateDataModal';
import Modal from 'react-bootstrap/Modal';
import Button from '@material-ui/core/Button';
 
const Map = props => {
  const [stateInfo, setStateInfo ] = useState({})
  const [showModal, setShowModal] = useState(false);
  

  const screenSize = () => {
    if(window.innerWidth > 1000) {
      return window.innerWidth
    } 
    return window.innerWidth - 10
  }
 
  /* optional customization of filling per state and calling custom callbacks per state */

  const statesCustomConfig = () => {

    const stateObj = {}

    const sorted = props.states.sort((a, b) => {
      return a.positive - b.positive
    })

    let count = 0

    sorted.forEach(state => {
        stateObj[state.state] = {
            fill: `rgb(${count},0,0)`,
            clickHandler: event => {
                console.log(`Custom handler for ${event.target.dataset}`, state )
                setStateInfo(state)
                setShowModal(true)
            }
        }
        count += 5
    })

    if(sorted.length > 0) {
      const largest = sorted[sorted.length - 1]
      stateObj[largest.state].fill = 'green'
    }
    
    return stateObj
  };

  const stopModal = () => {
    setShowModal(false)
  }

    
    return (
      <div className="">
        <USAMap className="map" customize={statesCustomConfig()} width={screenSize()}/>
        { showModal ? <StateDataModal showModal={showModal} stopModal={stopModal} stateInfo={ stateInfo } /> : null }
      </div>
    );
  
}
 
export default Map;