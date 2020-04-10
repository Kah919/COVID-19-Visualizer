import React, { useState, useEffect } from 'react';
import Map from './USAMap';
import Button from '@material-ui/core/Button';



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
        <Map states={states}/>
    )
}

export default MapContainer;