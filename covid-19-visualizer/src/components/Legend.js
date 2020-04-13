import React from 'react';
import styled from 'styled-components';

export default props => {
    const Div = styled.div`
        border: 1px solid black;
    `;

    return (
        <Div>
            <h1> This map indicates the severity of COVID-19 </h1>
            <p> The brighter the state, the more cases there are. </p>
            <p> The state in red is currently the state with the highest COVID-19 cases </p>
        </Div>
    )
}