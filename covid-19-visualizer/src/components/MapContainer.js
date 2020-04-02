import React, { useState, useEffect } from 'react';
import Map from './USAMap';



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
            <Map states={states}/>
        </>
    )
}

export default MapContainer;