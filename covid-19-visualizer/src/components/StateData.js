import React from 'react';

const StateData = props => {
    return (
        <section>
            <h1> {props.stateInfo.state} </h1>
            <ul>
                <li><strong>Cases:</strong> {props.stateInfo.positive}</li>
                <li><strong>Hospitalized:</strong> {props.stateInfo.hospitalized}</li>
                <li><strong>Recovered:</strong> {props.stateInfo.recovered}</li>
                <li><strong>Death:</strong> {props.stateInfo.death}</li>
                <li><em>Last Updated: {props.stateInfo.lastUpdateEt}</em></li>
            </ul>
        </section>
    )
}

export default StateData