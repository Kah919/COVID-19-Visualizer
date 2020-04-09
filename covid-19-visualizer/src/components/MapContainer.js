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

    const onClick = () => {
        // let x = arr;
        // x.push(2)
        // console.log(x)
        console.log(typeof arr.push(2))
        setArr(arr.push(2))
        console.log(arr)
    }
    console.log('rerender')
    return (
        <>
            <Map states={states}/>
            <button onClick={onClick}>apples</button>
        </>
    )
}

export default MapContainer;