import React, { Component } from 'react';
import { Cards, Charts, CountryPicker } from '../components';
import { fetchData } from './api';


class Global extends Component {
    state = {
        data: {},
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({
            data: fetchedData
        })
    }

    render() {
        const { data } = this.state;
        return(
            <div className="global_container">
                <Cards data={ data } />
                <CountryPicker />
                <Charts />
            </div>
        )
    }
}

export default Global;