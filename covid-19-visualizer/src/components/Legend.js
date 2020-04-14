import React from 'react';
import styled from 'styled-components';

export default props => {
    const Div = styled.div`
        border: 1px solid black;
        width: 30%;
        border-radius: 10px;
        background-color: #ffffffa8;
        margin: 0 auto;
        padding: 10px;
    `;

    const H1 = styled.h1`
        font-size: 1.2rem;
    `;

    const P = styled.p`
        text-align: left;
        font-size: 14px;
    `;

    return (
        <Div>
            <H1> This map indicates the severity of COVID-19 </H1>
            <P> The brighter the state, the more cases there are. The state in red is currently the state with the highest COVID-19 cases </P>
        </Div>
    )
}