import React from 'react';
import styled from 'styled-components';

export default () => {
    const Div = styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const Home = styled.h1`
        font-size: 8rem;
        letter-spacing: 5px;
        color: #5b78c7;
    `;

    const Lives = styled.h1`
        font-size: 8rem;
        letter-spacing: 5px;
        text-shadow:
        -1px -1px 0 #5b78c7,  
        1px -1px 0 #5b78c7,
        -1px 1px 0 #5b78c7,
        1px 1px 0 #5b78c7;
        color: white;
    `;

    return(
        <Div>
            <div>
                <Home> Stay Home </Home>
                <Lives> Save Lives </Lives>
            </div>
        </Div>
    )
}