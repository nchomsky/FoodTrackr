import React from 'react';
import LogItem from './LogItem';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    marginItem: {
        marginTop: theme.spacing(1)
    }
}));


// Use List Component from MaterialUI instead of card item
const LogList = () => {
    const classes = useStyles();
    return (
        <List disablePadding>
            <LogItem />
            <LogItem />
            <LogItem />
        </List>
    );
}

export default LogList;