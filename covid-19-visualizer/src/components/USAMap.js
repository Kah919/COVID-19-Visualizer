import React, { useState, useEffect } from 'react';
import USAMap from "react-usa-map";
 
const Map = () => {
    const [ states, setStates ] = useState([])

  /* mandatory */
  const mapHandler = (event) => {
    alert(event.target.dataset.name);
  };
 
  /* optional customization of filling per state and calling custom callbacks per state */

  useEffect(() => {
    fetch("https://covidtracking.com/api/states")
    .then(res => res.json())
    .then(data => {
        setStates(data)
    })
  })

  const statesCustomConfig = () => {
    return {
      "NJ": {
        fill: "navy",
        clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
      },
      "NY": {
        fill: "#CC0000",
        clickHandler: (event) => console.log(states)
      }
    };
  };
 
    
    return (
      <div className="App">
        <USAMap customize={statesCustomConfig()} onClick={mapHandler} />
      </div>
    );
  
}
 
export default Map;