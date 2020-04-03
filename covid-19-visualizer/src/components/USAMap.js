import React, { useState, useEffect } from 'react';
import USAMap from "react-usa-map";
import StateData from './StateData';
 
const Map = props => {
  const [stateInfo, setStateInfo ] = useState({})
  /* mandatory */
  const mapHandler = (event) => {
    // const state = states.filter(state => {
    //     return state.state === event.target.dataset.name
    // })
    console.log(props)
  };
 
  /* optional customization of filling per state and calling custom callbacks per state */

  const statesCustomConfig = () => {

    const stateObj = {}

    const sorted = props.states.sort((a, b) => {
      return a.positive - b.positive
    })

    let count = 87

    sorted.forEach(state => {
        stateObj[state.state] = {
            fill: `rgb(${count},0,0)`,
            clickHandler: event => {
                console.log(`Custom handler for ${event.target.dataset}`, state )
                setStateInfo(state)
            }
        }
        count += 3
    })
    return stateObj
  };

    
    return (
      <div className="App">
        <USAMap customize={statesCustomConfig()} onClick={mapHandler} />
        {stateInfo.state ? <StateData stateInfo={stateInfo} /> : null}
      </div>
    );
  
}
 
export default Map;