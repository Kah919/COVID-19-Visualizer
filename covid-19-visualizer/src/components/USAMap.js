import React, { useState, useEffect } from 'react';
import USAMap from "react-usa-map";
 
const Map = () => {
  /* mandatory */
  const mapHandler = (event) => {
    // const state = states.filter(state => {
    //     return state.state === event.target.dataset.name
    // })

    // console.log(state)
  };
 
  /* optional customization of filling per state and calling custom callbacks per state */



//   const findState = event => {
//     const state = states.filter(state => {
//         return states.state === event 
//     })
//   }

  const statesCustomConfig = () => {
    return {
      "NJ": {
        fill: "navy",
        clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
      },
      "NY": {
        fill: "#CC0000",
        clickHandler: (event) => console.log(event.target.dataset)
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