import React from 'react';
import LogList from './LogList';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    marginItem: {
        marginTop: theme.spacing(1)
    }
}));


// Use List Component from MaterialUI instead of card
const FoodLog = () => {
    const classes = useStyles();
    return (
        <Grid container direction="column">
            <Grid item >
                <Typography>Food Log</Typography>
            </Grid>
            <Grid item >
                <LogList />
            </Grid>
        </Grid>
    );
}

export default FoodLog;