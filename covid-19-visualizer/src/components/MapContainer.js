import React, { useState, useEffect } from 'react';
import Map from './USAMap';
// import Button from '@material-ui/core/Button';
import SideInfo from './SideInfo/SideInfo';
// import { fetchStates } from './api';



const MapContainer = () => {
    const [ states, setStates ] = useState([])
    const [ shouldFetch, setShouldFetch ] = useState(true)

    useEffect(() => {
        fetch("https://covidtracking.com/api/v1/states/current.json")
        .then(res => res.json())
        .then(data => {
            setStates(data)
            setShouldFetch(false)
        })
    }, shouldFetch)
    
    return (
        <div className="map_container">
            <Map states={states}/>
            <SideInfo states={states}/>
        </div>
    )
}

export default MapContainer;