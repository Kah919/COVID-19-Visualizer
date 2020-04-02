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

    props.states.forEach(state => {
        stateObj[state.state] = {
            fill: "pink",
            clickHandler: event => {
                console.log(`Custom handler for ${event.target.dataset}`, state )
                setStateInfo(state)
            }
        }
    })

    return stateObj


  };

    
    return (
      <div className="App">
        <USAMap customize={statesCustomConfig()} onClick={mapHandler} />
        <StateData stateInfo={stateInfo} />
      </div>
    );
  
}
 
export default Map;