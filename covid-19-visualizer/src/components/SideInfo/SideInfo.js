import React from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';
import styles from './SideInfo.module.css';
import cx from 'classnames';

export default ({ states }) => {
    const sortStates = () => {
        const sorted = states.sort((a, b) => {
            return a.positive - b.positive; 
        })

        return sorted;
    }
    
    const stateData = idx => {
        const { state, positive } = sortStates()[idx];
        const stateObj = {};
        stateObj.name = state;
        stateObj.positive = positive;

        return stateObj;
    }

    const mostCaption = state => {
        const { name, positive } = state;
        return <p> <span className={styles.state}> { name } </span> is currently the leading state with the most COVID-19 cases at <span className={styles.cases}> { positive }</span> </p>
    }

    const leastCaption = state => {
        const { name, positive } = state;
        return <p> <span className={styles.state}> { name } </span> is currently the state with the least amount of COVID-19 cases at <span className={styles.cases}> { positive }</span> </p>
    }


    return (
        <div className="side-container">
            <Grid container spacing={3} justify="center">
                <Grid item component={ Card } xs={ 12 } md={ 10 } className={ cx(styles.legend, styles.card) }>
                    <CardContent>
                        <h1> Legend </h1>
                        <p> This map shows which state has the most COVID-19 cases based on the color. The brighter the green the more cases there are. The state colored in red is currently the state with the most COVID-19 cases. 
                        <br></br>
                        Clicking on a state will show you the amount of cases, recoveries, deaths, and timeline of that current state.
                        </p>
                    </CardContent>
                </Grid>
                <Grid item component={ Card } xs={ 12 } md={ 10 } className={ cx(styles.legend, styles.most) }>
                    <CardContent>
                        <h2> Most Cases </h2>
                        <p variant="body2"> { states.length ? mostCaption(stateData(states.length - 1)) : null } </p>
                    </CardContent>
                </Grid>
                {/* <Grid item component={ Card } xs={ 12 } md={ 10 } className={ cx(styles.legend, styles.least) }>
                    <CardContent>
                        <h2> Least Cases </h2>
                        <Typography variant="body2"> { states.length ? leastCaption(stateData(0)) : null } </Typography>
                    </CardContent>
                </Grid> */}
            </Grid>
        </div>
    )
}