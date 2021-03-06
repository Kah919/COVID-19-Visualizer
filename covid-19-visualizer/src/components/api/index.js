import axios from 'axios';
import CountryPicker from '../CountryPicker/CountryPicker';

const url = 'https://covid19.mathdro.id/api';
const states = 'https://covidtracking.com/api/v1/states/current.json';

export const fetchData = async (country) => {
    let changeableURL = url;

    if(country) {
        changeableURL = `${url}/countries/${country}`
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableURL);
        return { confirmed, recovered, deaths, lastUpdate };
    } catch(error) {
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        const modifiedData = data.map(dailyData => (
            {
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate,
            }
        ));

        return modifiedData;
    } catch(error) {
        console.log(error)
    }
}

export const fetchCountries = async() => {
    try {
        const { data: { countries }} = await axios.get(`${url}/countries`);
        return countries.map(country => country.name);
    } catch(error) {
        console.log(error);
    }
}

export const fetchStates = async() => {
    try {
        const states = await axios.get(states);
        return states;
    } catch(error) {
        console.log(error);
    }
}