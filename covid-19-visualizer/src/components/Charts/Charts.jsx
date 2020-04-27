import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Charts.module.css';

export default () => {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchAPI = async() => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    })



    return(
        <h1> Charts </h1>
    )
}