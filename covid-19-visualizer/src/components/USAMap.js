import React, { useState, useEffect } from 'react';
import USAMap from "react-usa-map";
import StateData from './StateData';
import StatsModal from './StatsModal';
 
const Map = props => {
  const [stateInfo, setStateInfo ] = useState({})
  /* mandatory */
  const mapHandler = (event) => {
    // const state = states.filter(state => {
    //     return state.state === event.target.dataset.name
    // })
    console.log(props)
    
  };

  const screenSize = () => {
    if(window.innerWidth > 1000) {
      return window.innerWidth / 2
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
            }
        }
        count += 5
    })

    if(sorted.length > 0) {
      const largest = sorted[sorted.length - 1]
      stateObj[largest.state].fill = 'pink'
    }
    
    return stateObj
  };

    
    return (
      <div className="App">
        <USAMap className="map" customize={statesCustomConfig()} onClick={mapHandler} width={screenSize()}/>
        {stateInfo.state ? <StateData stateInfo={stateInfo} /> : null}
        <StatsModal />
      </div>
    );
  
}
 
export default Map;