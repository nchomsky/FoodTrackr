import React from 'react';
import LogList from './LogList';
import { Card, Divider, CardHeader, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    marginLog: {
        marginTop: theme.spacing(2)
    },
    disablePadding: {
        padding: 0,
        '&:last-child': {
            paddingBottom: 0
        }
    }
}));

// Make function that determines what is displayed 
// (if no food logged display default text else display LogItem)

// Add Date below Food Log title so you can choose which date you are viewing

const FoodLog = () => {
    const classes = useStyles();
    return (
        <Card elevation={3} className={classes.marginLog}>
            <CardHeader title="Food Log" style={{ textAlign: 'center' }} />
            <Divider />
            <CardContent className={classes.disablePadding}>
                {/* <Typography style={{ textAlign: 'center' }}>Start Adding food to log what you've eaten!</Typography> */}
                <LogList />
            </CardContent>
        </Card>

    );
}

export default FoodLog;