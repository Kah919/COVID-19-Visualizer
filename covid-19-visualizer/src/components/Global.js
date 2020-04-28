import React, { Component } from 'react';
import { Cards, Charts, CountryPicker } from '../components';
import { fetchData } from './api';


class Global extends Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({
            data: fetchedData
        })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state;
        return(
            <div className="global_container">
                <Cards data={ data } />
                <CountryPicker handleCountryChange={ this.handleCountryChange } />
                <Charts data={ data } country={ country } />
            </div>
        )
    }
}

export default Global;