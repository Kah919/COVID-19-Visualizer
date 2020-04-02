import React, { useState, useEffect } from 'react';
import Map from './USAMap';
import StateData from './StateData';


const MapContainer = () => {
    const [ states, setStates ] = useState([])

    useEffect(() => {
        fetch("https://covidtracking.com/api/states")
        .then(res => res.json())
        .then(data => {
            setStates(data)
        })
    })

    return (
        <>
            <Map />
            <StateData />
        </>
    )
}

export default MapContainer;