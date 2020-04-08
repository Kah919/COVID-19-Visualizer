import React, { useState, useEffect } from 'react';
import Map from './USAMap';
import Button from '@material-ui/core/Button';



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
            <Button variant="contained" color="primary">
                Hello World
            </Button>
        </>
    )
}

export default MapContainer;