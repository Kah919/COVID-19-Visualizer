import React, { useState, useEffect } from 'react';
import Map from './USAMap';
import Button from '@material-ui/core/Button';
import Legend from './Legend'



const MapContainer = () => {
    const [ states, setStates ] = useState([])
    const [ shouldFetch, setShouldFetch ] = useState(true)
    const [ arr, setArr ] = useState([])

    useEffect(() => {
        fetch("https://covidtracking.com/api/states")
        .then(res => res.json())
        .then(data => {
            setStates(data)
            setShouldFetch(false)
        })
    }, shouldFetch)

    console.log('rerender')
    return (
        <div className="map_container">
            <h1> USA COVID-19 Map </h1>
            <Map states={states}/>
            <Legend />
        </div>
    )
}

export default MapContainer;