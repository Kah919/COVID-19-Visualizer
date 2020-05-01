import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './SideInfo.module.css';
import cx from 'classnames';


export default props => {
    return (
        <div className="side-container">
            <Grid container spacing={3} justify="center">
                <Grid item component={ Card } xs={ 12 } md={ 10 } className={ cx(styles.legend, styles.card) }>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Legend </Typography>
                        <Typography variant="body2"> This map shows which state has the most COVID-19 cases based on the color. The brighter the green the more cases there are. The state colored in red is currently the state with the most COVID-19 cases. 
                        <br></br>
                        Clicking on a state will show you the amount of cases, recoveries, deaths, and timeline of that current state.
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={ Card } xs={ 12 } md={ 10 } className={ cx(styles.legend, styles.most) }>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Recovered </Typography>
                        <Typography variant="body2"> Number of recoveries COVID-19 </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={ Card } xs={ 12 } md={ 10 } className={ cx(styles.legend, styles.least) }>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Deaths </Typography>
                        <Typography variant="body2"> Number of deaths caused by COVID-19 </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}