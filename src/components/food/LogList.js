import React from 'react';
import LogItem from './LogItem';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    marginItem: {
        marginTop: theme.spacing(1)
    }
}));


// Use List Component from MaterialUI instead of card
const LogList = () => {
    const classes = useStyles();
    return (
        <Grid container direction="column">
            <Grid item >
                <LogItem />
            </Grid>
            <Grid item >
                <LogItem />
            </Grid>
            <Grid item >
                <LogItem />
            </Grid>
            <Grid item >
                <LogItem />
            </Grid>
        </Grid>
    );
}

export default LogList;